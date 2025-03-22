import Head from 'next/head'
import Header from '@website/components/Header'
import Footer from '@website/components/Footer'
import ReactMarkdown from 'react-markdown'

export default function PrivacyPolicy() {
  const markdownContent = `
#Chính Sách Quyền Riêng Tư# 
**Hiệu lực từ: [Ngày cập nhật]**  

Chào mừng bạn đến với "AI Sức Khỏe - Trợ lý sức khỏe thông minh mọi gia đình". Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo rằng dữ liệu cá nhân của bạn được xử lý một cách minh bạch và an toàn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi sử dụng ứng dụng.

---

## 1. Thông Tin Chúng Tôi Thu Thập
Chúng tôi có thể thu thập các loại thông tin sau từ bạn:

- **Thông tin cá nhân:** Họ và tên, số điện thoại, địa chỉ email, ngày sinh, giới tính và các thông tin khác cần thiết để cá nhân hóa trải nghiệm của bạn.
- **Dữ liệu sức khỏe:** Các thông tin về triệu chứng, bệnh lý, lịch sử khám chữa bệnh do bạn cung cấp để ứng dụng đưa ra tư vấn phù hợp.
- **Dữ liệu thiết bị:** Địa chỉ IP, loại thiết bị, hệ điều hành, dữ liệu nhật ký khi bạn sử dụng ứng dụng.
- **Dữ liệu vị trí:** Nếu bạn cho phép, chúng tôi có thể thu thập vị trí để gợi ý bác sĩ và cơ sở y tế gần nhất.

---

## 2. Cách Chúng Tôi Sử Dụng Thông Tin
Chúng tôi sử dụng thông tin thu thập được để:

- Cung cấp dịch vụ tư vấn sức khỏe cá nhân hóa cho từng thành viên trong gia đình.
- Đề xuất bác sĩ phù hợp với tình trạng sức khỏe của bạn.
- Cải thiện trải nghiệm người dùng và tối ưu hóa dịch vụ.
- Đảm bảo an toàn và bảo mật thông tin.
- Tuân thủ các quy định pháp luật liên quan.

---

## 3. Chia Sẻ Thông Tin Của Bạn
Chúng tôi cam kết không bán hoặc cho thuê dữ liệu cá nhân của bạn. Trong một số trường hợp, chúng tôi có thể chia sẻ thông tin với:

- **Bác sĩ và cơ sở y tế** để kết nối bạn với dịch vụ y tế phù hợp.
- **Nhà cung cấp dịch vụ bên thứ ba** hỗ trợ chúng tôi duy trì và cải thiện ứng dụng.
- **Cơ quan pháp luật** khi có yêu cầu hợp pháp.

---

## 4. Lưu Trữ & Bảo Mật Dữ Liệu
Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn khỏi mất mát, truy cập trái phép hoặc lạm dụng. Dữ liệu sẽ được lưu trữ trong khoảng thời gian cần thiết để cung cấp dịch vụ hoặc theo quy định pháp luật.

---

## 5. Quyền Của Bạn
Bạn có các quyền sau liên quan đến dữ liệu cá nhân:

- **Truy cập và chỉnh sửa thông tin cá nhân** trong ứng dụng.
- **Yêu cầu xóa dữ liệu cá nhân** khi không còn sử dụng dịch vụ.
- **Hạn chế hoặc phản đối việc xử lý dữ liệu** trong một số trường hợp cụ thể.

---

## 6. Cookies và Công Nghệ Theo Dõi
Ứng dụng có thể sử dụng cookies hoặc công nghệ theo dõi tương tự để cải thiện trải nghiệm người dùng. Bạn có thể tùy chỉnh quyền riêng tư trong cài đặt thiết bị của mình.

---

## 7. Thay Đổi Chính Sách
Chúng tôi có thể cập nhật Chính Sách Quyền Riêng Tư này theo thời gian. Nếu có thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn qua email hoặc trong ứng dụng.

---

## 8. Liên Hệ
Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Quyền Riêng Tư này, vui lòng liên hệ:

- **Email:** [Email hỗ trợ]
- **Số điện thoại:** [Số hỗ trợ]
- **Website:** [Đường dẫn website nếu có]

Chúng tôi trân trọng sự tin tưởng của bạn và cam kết bảo vệ thông tin cá nhân của bạn một cách tốt nhất!
  `

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <Header />

      <div className="mx-auto w-full px-6 lg:max-w-3xl space-y-16 sm:space-y-32 py-24 ">
        <div className="flex flex-col gap-4">
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
