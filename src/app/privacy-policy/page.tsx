import Head from 'next/head'
import Header from '@/components/Common/CommonHeader'
import Footer from '@/components/Common/CommonFooter'
import ReactMarkdown from 'react-markdown'

export default function PrivacyPolicy() {
  const markdownContent = `
# Chính Sách Quyền Riêng Tư  
**Hiệu lực từ: 23 tháng 03 năm 2025**

Chào mừng bạn đến với **AI Sức Khỏe** – Trợ lý sức khỏe thông minh cho mọi gia đình. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và xử lý dữ liệu cá nhân một cách minh bạch, an toàn, và tuân thủ pháp luật. Chính sách này giải thích chi tiết cách chúng tôi thu thập, sử dụng, lưu trữ, và bảo vệ thông tin của bạn khi bạn sử dụng ứng dụng.

## 1. Thông Tin Chúng Tôi Thu Thập  
Chúng tôi thu thập các loại thông tin sau để cung cấp dịch vụ:

### 1.1. Thông Tin Cá Nhân  
- Họ và tên, địa chỉ email, số điện thoại, ngày sinh, giới tính, và các thông tin khác bạn cung cấp khi đăng ký hoặc sử dụng ứng dụng.  
- Thông tin thanh toán (ví dụ: số thẻ tín dụng, lịch sử giao dịch) nếu bạn sử dụng các gói dịch vụ trả phí.

### 1.2. Dữ Liệu Sức Khỏe  
- Triệu chứng, lịch sử sức khỏe, bệnh lý, hoặc các thông tin liên quan bạn nhập vào ứng dụng để nhận tư vấn cá nhân hóa.  
- Đây là dữ liệu nhạy cảm và được bảo vệ đặc biệt theo quy định pháp luật.

### 1.3. Dữ Liệu Kỹ Thuật  
- Địa chỉ IP, loại thiết bị, hệ điều hành, phiên bản ứng dụng, và nhật ký sử dụng (log data).  
- Dữ liệu này giúp chúng tôi tối ưu hóa hiệu suất và bảo mật ứng dụng.

### 1.4. Dữ Liệu Vị Trí  
- Nếu bạn cho phép, chúng tôi thu thập thông tin vị trí (dựa trên GPS hoặc IP) để đề xuất bác sĩ hoặc cơ sở y tế gần nhất.  
- Bạn có thể tắt tính năng này trong cài đặt thiết bị bất kỳ lúc nào.

### 1.5. Dữ Liệu Trẻ Em  
- Chúng tôi không chủ đích thu thập dữ liệu từ người dùng dưới 18 tuổi mà không có sự đồng ý của cha mẹ hoặc người giám hộ hợp pháp. Nếu phát hiện trường hợp này, vui lòng liên hệ chúng tôi để xóa dữ liệu.

## 2. Cách Chúng Tôi Sử Dụng Thông Tin  
Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:  
- Cung cấp tư vấn sức khỏe cá nhân hóa dựa trên dữ liệu bạn nhập và mô hình AI từ Gemini (Google) và OpenAI.  
- Kết nối bạn với bác sĩ hoặc cơ sở y tế phù hợp.  
- Xử lý thanh toán và quản lý gói dịch vụ trả phí.  
- Cải thiện chất lượng ứng dụng, bao gồm việc huấn luyện AI (dữ liệu được ẩn danh trước khi sử dụng).  
- Phát hiện và ngăn chặn gian lận, đảm bảo an toàn hệ thống.  
- Tuân thủ các yêu cầu pháp lý hoặc quy định của cơ quan có thẩm quyền.

## 3. Chia Sẻ Thông Tin  
Chúng tôi không bán, cho thuê, hoặc trao đổi dữ liệu cá nhân của bạn với mục đích thương mại. Tuy nhiên, thông tin có thể được chia sẻ trong các trường hợp sau:  

### 3.1. Với Đối Tác Dịch Vụ  
- **Bác sĩ/Cơ sở y tế**: Để hỗ trợ kết nối bạn với dịch vụ y tế phù hợp.  
- **Nhà cung cấp công nghệ**: Các đối tác như Google (Gemini) và OpenAI có thể nhận dữ liệu ẩn danh để cải thiện mô hình AI, tuân thủ thỏa thuận bảo mật nghiêm ngặt.  
- **Dịch vụ bên thứ ba**: Các nhà cung cấp thanh toán, lưu trữ đám mây, hoặc phân tích dữ liệu, nhưng chỉ khi họ cam kết bảo vệ thông tin theo tiêu chuẩn của chúng tôi.

### 3.2. Theo Yêu Cầu Pháp Lý  
- Chúng tôi có thể tiết lộ thông tin nếu được yêu cầu bởi cơ quan pháp luật hoặc để bảo vệ quyền lợi hợp pháp của chúng tôi, người dùng, hoặc cộng đồng.

## 4. Lưu Trữ & Bảo Mật Dữ Liệu  
- **Bảo mật**: Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức tiên tiến (mã hóa, kiểm soát truy cập) để bảo vệ dữ liệu khỏi truy cập trái phép, mất mát, hoặc lạm dụng.  
- **Thời gian lưu trữ**: Dữ liệu được lưu trữ trong thời gian bạn sử dụng dịch vụ và tối đa 12 tháng sau khi bạn hủy tài khoản, trừ khi pháp luật yêu cầu thời gian khác.  
- **Vị trí lưu trữ**: Dữ liệu được lưu trên máy chủ tại Việt Nam hoặc các quốc gia có tiêu chuẩn bảo mật tương đương.

## 5. Quyền Của Bạn  
Theo Luật Bảo vệ Dữ liệu Cá nhân Việt Nam và các quy định liên quan, bạn có các quyền sau:  
- **Truy cập**: Xem thông tin cá nhân của bạn trong mục cài đặt tài khoản.  
- **Chỉnh sửa**: Cập nhật thông tin nếu có sai sót.  
- **Xóa**: Yêu cầu xóa dữ liệu bằng cách gửi email đến **hotro@aisuckhoe.com** (xác minh danh tính có thể được yêu cầu).  
- **Hạn chế xử lý**: Phản đối việc sử dụng dữ liệu cho một số mục đích cụ thể (ví dụ: phân tích AI).  
- **Rút đồng ý**: Tắt quyền truy cập vị trí hoặc dữ liệu khác trong cài đặt thiết bị.  

Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 30 ngày.

## 6. Cookies và Công Nghệ Theo Dõi  
Chúng tôi sử dụng cookies và công nghệ tương tự để:  
  - Lưu trữ tùy chọn của bạn (ví dụ: ngôn ngữ).  
  - Phân tích hành vi sử dụng để cải thiện dịch vụ.  
  
Bạn có thể từ chối cookies qua cài đặt thiết bị, nhưng điều này có thể ảnh hưởng đến trải nghiệm ứng dụng.

## 7. Xử Lý Vi Phạm Dữ Liệu  
Nếu xảy ra sự cố bảo mật (data breach), chúng tôi sẽ:  
  - Thông báo cho bạn qua email trong vòng 72 giờ nếu có nguy cơ nghiêm trọng.  
  - Báo cáo cơ quan chức năng theo quy định pháp luật.  
  - Thực hiện các biện pháp khắc phục kịp thời.

## 8. Thay Đổi Chính Sách  
- Chúng tôi có thể cập nhật chính sách này để phản ánh thay đổi trong dịch vụ hoặc quy định pháp luật.  
- Nếu có thay đổi quan trọng, bạn sẽ được thông báo qua email hoặc thông báo trong ứng dụng ít nhất 7 ngày trước khi áp dụng.

## 9. Cơ Sở Pháp Lý  
- Chính sách này tuân thủ **Luật Bảo vệ Dữ liệu Cá nhân 2023** của Việt Nam và các quy định quốc tế liên quan (nếu áp dụng).  
- Mọi tranh chấp liên quan đến quyền riêng tư sẽ được giải quyết theo pháp luật Việt Nam tại tòa án có thẩm quyền ở TP. Hồ Chí Minh.

## 10. Liên Hệ  
Nếu bạn có câu hỏi, khiếu nại, hoặc cần hỗ trợ về quyền riêng tư, vui lòng liên hệ:  
- **Email:** xinchao@aisuckhoe.com  
- **Website:** https://aisuckhoe.com/contact  

Chúng tôi trân trọng sự tin tưởng của bạn và cam kết bảo vệ dữ liệu cá nhân một cách tối ưu. Cảm ơn bạn đã sử dụng **AI Sức Khỏe**!`

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <main className="flex flex-col justify-between min-h-screen">
        <Header isAbsolute={false} />

        <div className="flex-1 container max-w-3xl mx-auto px-4 bg-background">
          <div className="text-left my-12">
            <h1 className="text-4xl font-bold mb-16 text-foreground">Chính Sách Quyền Riêng Tư </h1>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 w-full max-w-3xl my-16">
            <div className="flex flex-col gap-4">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
                  p: ({ children }) => (
                    <p
                      className="text-base text-gray-800 mb-4"
                      style={{
                        letterSpacing: '0.01em',
                        lineHeight: '2',
                      }}
                    >
                      {children}
                    </p>
                  ),
                  li: ({ children }) => (
                    <li
                      className="text-base text-gray-800 mb-4"
                      style={{
                        letterSpacing: '0.01em',
                        lineHeight: '2',
                      }}
                    >
                      {children}
                    </li>
                  ),
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <Footer isAbsolute={false} />
      </main>
    </>
  )
}
