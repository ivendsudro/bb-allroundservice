import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import fs from 'fs/promises';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const password = formData.get('password') as string;
    const categoryLabel = formData.get('category') as string;
    const fileBefore = formData.get('fileBefore') as File | null;
    const fileAfter = formData.get('fileAfter') as File | null;

    // 1. Check Password
    if (password !== 'pinguin') {
      return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 });
    }

    const publicPath = join(process.cwd(), 'public', 'uploads');
    
    // Ensure directory exists
    try {
      await mkdir(publicPath, { recursive: true });
    } catch (e) {}

    let pathBefore = '';
    let pathAfter = '';

    // 2. Save "Vorher" image
    if (fileBefore && fileBefore.size > 0) {
      const bytes = await fileBefore.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `before-${categoryLabel.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.jpg`;
      const path = join(publicPath, filename);
      await writeFile(path, buffer);
      pathBefore = `/uploads/${filename}`;
    }

    // 3. Save "Nachher" image
    if (fileAfter && fileAfter.size > 0) {
      const bytes = await fileAfter.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `after-${categoryLabel.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.jpg`;
      const path = join(publicPath, filename);
      await writeFile(path, buffer);
      pathAfter = `/uploads/${filename}`;
    }

    // 4. Update gallery.json
    const dataPath = join(process.cwd(), 'src', 'data', 'gallery.json');
    const fileData = await fs.readFile(dataPath, 'utf8');
    const config = JSON.parse(fileData);

    const itemIndex = config.items.findIndex((item: any) => item.label === categoryLabel);
    if (itemIndex !== -1) {
      if (pathBefore) config.items[itemIndex].imageBefore = pathBefore;
      if (pathAfter) config.items[itemIndex].imageAfter = pathAfter;
      
      // Optional: If you want to disable icons after ONE change globally/specifically:
      // config.setupCompleted = true; // User said icons should be deleted "after one-time editing"
    }

    await fs.writeFile(dataPath, JSON.stringify(config, null, 2));

    return NextResponse.json({ success: true, pathBefore, pathAfter });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload fehlgeschlagen: ' + error.message }, { status: 500 });
  }
}
