import dataSource from './data-source.js';
import { Map as MapEntity  } from './map/map.entity.js';

async function seed() {
  await dataSource.initialize();

  try {
    const mapRepository = dataSource.getRepository(MapEntity);

    const count = await mapRepository.count();

    if (count > 0) {
      console.log('Bảng map đã có dữ liệu, bỏ qua seed.');
      return;
    }

    await mapRepository.insert([
      { name: 'Di Tích Quốc Gia Đặc Biệt', oder: 1, icon: '' },
      { name: 'Di Tích Quốc Gia', oder: 2, icon: '' },
      { name: 'Di Tích Cấp Tỉnh', oder: 3, icon: '' },
      { name: 'Di Tích', oder: 4, icon: '' },
      { name: 'Địa điểm hành chính', oder: 5, icon: '' },
      { name: 'Thể thao', oder: 6, icon: '' },
      { name: 'Khách Sạn', oder: 7, icon: '' },
      { name: 'Siêu Thị', oder: 8, icon: '' },
      { name: 'Tiệm cà phê', oder: 9, icon: '' },
      { name: 'Music box', oder: 10, icon: '' },
    ]);

    console.log('Đã thêm 10 mục bản đồ mẫu.');
  } finally {
    await dataSource.destroy();
  }
}

seed().catch((error: unknown) => {
  console.error('Seed thất bại:', error);
  process.exitCode = 1;
});