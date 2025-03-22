import Head from 'next/head'
import Header from '@website/components/Header'
import Footer from '@website/components/Footer'
import ReactMarkdown from 'react-markdown'

export default function TermsAndConditions() {
  const markdownContent = `
# Điều Khoản Dịch Vụ

## Ngày Hiệu Lực: [Ngày phát hành]

Chào mừng bạn đến với ứng dụng **AI Sức Khỏe** – Trợ lý sức khỏe thông minh cho mọi gia đình. Khi sử dụng ứng dụng của chúng tôi, bạn đồng ý với các điều khoản và điều kiện sau đây. Vui lòng đọc kỹ trước khi tiếp tục sử dụng dịch vụ.

---
## 1. Giới Thiệu
Ứng dụng AI Sức Khỏe cung cấp nền tảng tư vấn sức khỏe dựa trên AI, giúp người dùng:
- Cá nhân hóa nội dung theo từng thành viên trong gia đình.
- Nhận thông tin từ các chuyên gia và tổ chức y tế uy tín.
- Tìm kiếm bác sĩ phù hợp với tình trạng sức khỏe.

Ứng dụng **không** thay thế tư vấn y tế chuyên môn. Hãy tham khảo ý kiến của bác sĩ trước khi đưa ra bất kỳ quyết định nào liên quan đến sức khỏe.

---
## 2. Điều Kiện Sử Dụng
### 2.1. Độ tuổi tối thiểu
Người dùng phải từ **18 tuổi trở lên** để đăng ký và sử dụng dịch vụ. Nếu dưới 18 tuổi, bạn phải có sự đồng ý từ cha mẹ hoặc người giám hộ.

### 2.2. Đăng ký tài khoản
- Bạn phải cung cấp thông tin chính xác khi đăng ký.
- Không chia sẻ tài khoản của mình với người khác.
- Bạn chịu trách nhiệm về mọi hoạt động diễn ra trên tài khoản của mình.

---
## 3. Quyền & Trách Nhiệm Của Người Dùng
### 3.1. Hành vi bị cấm
Bạn **không** được:
- Cung cấp thông tin sai lệch hoặc giả mạo.
- Lạm dụng dịch vụ để phát tán thông tin sai lệch về y tế.
- Xâm phạm quyền riêng tư của người khác hoặc vi phạm pháp luật.
- Sử dụng ứng dụng để thay thế tư vấn y tế chuyên môn.

### 3.2. Nội dung & dữ liệu cá nhân
- Bạn chịu trách nhiệm về thông tin bạn nhập vào hệ thống.
- AI có thể cung cấp thông tin không chính xác, bạn cần tham khảo ý kiến chuyên gia trước khi áp dụng.
- Chúng tôi cam kết bảo vệ dữ liệu cá nhân theo chính sách bảo mật.

---
## 4. Giới Hạn Trách Nhiệm
- AI Sức Khỏe **không chịu trách nhiệm** đối với bất kỳ tổn hại nào phát sinh từ việc sử dụng ứng dụng.
- Ứng dụng chỉ cung cấp thông tin mang tính tham khảo, **không phải là lời khuyên y tế chuyên môn**.

---
## 5. Chấm Dứt & Hủy Dịch Vụ
Chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản nếu phát hiện bạn vi phạm điều khoản dịch vụ hoặc có hành vi gây tổn hại đến hệ thống.

Bạn có thể ngừng sử dụng dịch vụ bất cứ lúc nào bằng cách hủy tài khoản của mình.

---
## 6. Thay Đổi Điều Khoản
Chúng tôi có thể cập nhật Điều khoản Dịch vụ theo thời gian. Nếu có thay đổi quan trọng, chúng tôi sẽ thông báo trước.

---
## 7. Liên Hệ
Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ: **[Email hỗ trợ]**

Cảm ơn bạn đã sử dụng **AI Sức Khỏe**!

`

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <Header />

      <div className="mx-auto w-full px-6 lg:max-w-3xl space-y-16 sm:space-y-32 py-24 ">
        <div className="flex flex-col gap-4 ">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
              p: ({ children }) => <p className="text-base text-gray-800 mb-4">{children}</p>,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  )
}
