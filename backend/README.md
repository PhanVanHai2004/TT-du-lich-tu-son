# API quản lý mục bản đồ

Backend xây dựng bằng NestJS, TypeORM và PostgreSQL.

## Yêu cầu

- Node.js và npm tương thích với dự án.
- PostgreSQL đã được cài đặt và đang chạy.

## 1. Tải mã nguồn

```bash
git clone <URL_REPOSITORY>
cd <TEN_THU_MUC_DU_AN>
```

## 2. Cài dependencies

```bash
npm ci
```

## 3. Cấu hình môi trường

Sao chép `.env.example` thành `.env`.

PowerShell:

```powershell
Copy-Item .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

Chỉnh thông tin PostgreSQL trong `.env`:

```dotenv
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_postgresql_password
DB_DATABASE=nest_learning
```

Không đưa file `.env` chứa mật khẩu thật lên Git.

## 4. Tạo database

Mở pgAdmin, kết nối PostgreSQL và tạo database có tên
khớp với `DB_DATABASE` trong `.env`.

Ví dụ, chạy trong Query Tool của database `postgres`:

```sql
CREATE DATABASE nest_learning;
```

Bỏ qua bước này nếu database đã tồn tại.

## 5. Tạo cấu trúc bảng
```bash
npm run migration
```

```bash
npm run migration:run
```

Lệnh sẽ build project và áp dụng các migration chưa chạy.

## 6. Thêm dữ liệu mẫu

```bash
npm run db:seed
```

Seed thêm 10 mục bản đồ, gồm các nhóm di tích, địa điểm
hành chính, thể thao, khách sạn, siêu thị, tiệm cà phê
và Music box.

Nếu bảng `map` đã có bất kỳ dữ liệu nào, seed sẽ bỏ qua.

## 7. Chạy ứng dụng

```bash
npm run start:dev
```

Mặc định ứng dụng chạy tại:

http://localhost:3000

## Kiểm tra API

Lấy danh sách mục bản đồ:

```http
GET /map
```

Ví dụ response:

```json
{
  [
    {
      "id": 1,
      "name": "Di Tích Quốc Gia Đặc Biệt",
      "oder": 1,
      "icon": ""
    }
  ]
}
```

ID do database tự sinh. Cột `oder` là thứ tự hiển thị.

## Các lệnh thường dùng

| Lệnh | Chức năng |
|---|---|
| `npm run start:dev` | Chạy ứng dụng và theo dõi thay đổi |
| `npm run build` | Build project |
| `npm run migration` | So sánh entity với database và sinh migration |
| `npm run migration:run` | Áp dụng migration chưa chạy |
| `npm run db:seed` | Thêm dữ liệu mẫu nếu bảng map đang rỗng |

## Khi thay đổi entity

1. Áp dụng hết các migration đang chờ.
2. Sửa entity.
3. Chạy `npm run migration`.
4. Đọc và kiểm tra file migration được sinh.
5. Chạy `npm run migration:run`.

Commit cả entity và file migration lên Git.
Người tải project chỉ cần chạy migration có sẵn,
không cần tự sinh lại migration.

## Lỗi thường gặp

- `ECONNREFUSED`: kiểm tra PostgreSQL đã chạy, host và port.
- `password authentication failed`: kiểm tra username và password.
- `database ... does not exist`: tạo database đúng tên trong `.env`.
- `relation "map" does not exist`: kiểm tra đã chạy migration vào đúng database.