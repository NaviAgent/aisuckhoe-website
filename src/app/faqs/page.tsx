import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const faqs = [
  {
    question: 'AI Sức Khỏe là gì?',
    answer:
      'AI Sức Khỏe là một ứng dụng trợ lý sức khỏe thông minh, sử dụng trí tuệ nhân tạo (AI) từ Gemini (Google) và OpenAI để cung cấp tư vấn sức khỏe cá nhân hóa, gợi ý bác sĩ, và thông tin y tế từ các nguồn uy tín. Tuy nhiên, đây không phải là sự thay thế cho tư vấn y tế chuyên môn từ bác sĩ.',
  },
  {
    question: 'Ai có thể sử dụng ứng dụng này?',
    answer:
      'Người dùng từ 18 tuổi trở lên có thể đăng ký và sử dụng dịch vụ. Nếu bạn dưới 18 tuổi, cần có sự đồng ý của cha mẹ hoặc người giám hộ hợp pháp.',
  },
  {
    question: 'Tôi cần làm gì để đăng ký tài khoản?',
    answer:
      'Bạn chỉ cần cung cấp thông tin cơ bản như họ tên, email, và tạo mật khẩu. Đảm bảo thông tin chính xác để nhận được tư vấn phù hợp. Sau khi đăng ký, bạn có thể tùy chỉnh hồ sơ sức khỏe trong ứng dụng.',
  },
  {
    question: 'Ứng dụng có miễn phí không?',
    answer:
      'Ngay sau khi đăng ký tài khoản, bạn sẽ được trải nghiệm **100 câu hỏi miễn phí** trong ngày đầu tiên để khám phá các tính năng của **AI Sức Khỏe**. Sau thời gian này, một số tính năng cơ bản vẫn được sử dụng miễn phí. Để tiếp tục hỏi đáp với AI bạn có thể đăng ký các gói cơ bản. Chi tiết về các gói dịch vụ được nêu trong mục "Gói Dịch Vụ" trên ứng dụng',
  },
  {
    question: 'Tôi có thể hủy gói trả phí như thế nào?',
    answer:
      'Bạn có thể hủy gói trả phí bất kỳ lúc nào qua phần cài đặt tài khoản trong ứng dụng. Việc hủy sẽ có hiệu lực vào cuối chu kỳ thanh toán hiện tại, và bạn sẽ không bị tính phí thêm.',
  },
  {
    question: 'Dữ liệu cá nhân của tôi có được bảo mật không?',
    answer:
      'Có, chúng tôi cam kết bảo vệ dữ liệu cá nhân của bạn bằng các biện pháp mã hóa và kiểm soát truy cập tiên tiến. Thông tin chi tiết được nêu trong [Chính Sách Quyền Riêng Tư](https://aisuckhoe.com/privacy-policy). Chúng tôi không bán hoặc cho thuê dữ liệu của bạn.',
  },
  {
    question: 'Ứng dụng sử dụng dữ liệu của tôi như thế nào?',
    answer:
      'Dữ liệu bạn cung cấp (như triệu chứng, lịch sử sức khỏe) được sử dụng để cá nhân hóa tư vấn sức khỏe và cải thiện dịch vụ. Một phần dữ liệu ẩn danh có thể được dùng để huấn luyện mô hình AI từ Gemini và OpenAI, nhưng luôn tuân thủ chính sách bảo mật.',
  },
  {
    question: 'Tôi có thể yêu cầu xóa dữ liệu của mình không?',
    answer:
      'Có, bạn có quyền yêu cầu xóa dữ liệu cá nhân bằng cách gửi email đến xinchao@aisuckhoe.com. Chúng tôi sẽ xử lý trong vòng 30 ngày sau khi xác minh danh tính của bạn.',
  },
  {
    question: 'Điều gì xảy ra nếu tôi gặp tình huống khẩn cấp về sức khỏe?',
    answer:
      'AI Sức Khỏe không được thiết kế để xử lý các tình huống khẩn cấp. Nếu bạn gặp trường hợp nghiêm trọng, hãy liên hệ ngay cơ sở y tế gần nhất hoặc gọi số cấp cứu (115 tại Việt Nam).',
  },
  {
    question: 'Làm sao tôi biết khi nào chính sách hoặc điều khoản thay đổi?',
    answer:
      'Chúng tôi sẽ thông báo qua email hoặc trong ứng dụng ít nhất 7 ngày trước khi áp dụng bất kỳ thay đổi quan trọng nào trong Điều Khoản Dịch Vụ hoặc Chính Sách Quyền Riêng Tư. Bạn cũng có thể kiểm tra phiên bản mới nhất trên website: https://aisuckhoe.com.',
  },
]

export default function FAQ() {
  return (
    <>
      <Head>
        <title>AI Sức Khỏe - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <main className="flex flex-col justify-between min-h-screen">
        <Header isAbsolute={false} />

        <div className="flex-1 container max-w-6xl mx-auto px-4 bg-background">
          <div className="text-left my-12">
            <h1 className="text-4xl font-bold mb-16 text-foreground">Câu hỏi thường gặp</h1>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={faq.question}>
                <AccordionTrigger className="h4">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  )
}
