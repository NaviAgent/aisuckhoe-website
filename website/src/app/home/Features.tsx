'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    id: 'personalize',
    title: 'Sức khoẻ cá nhân',
    subtitle: 'Dành cho từng người bạn yêu thương',
    description:
      'Không còn những lời khuyên chung chung! AI Sức Khỏe lắng nghe bạn, hiểu rõ nhu cầu của từng thành viên trong gia đình – từ bé yêu hiếu động, bố mẹ bận rộn, đến ông bà cần sự chăm sóc đặc biệt. Chỉ cần một câu hỏi, chúng tôi sẽ mang đến giải pháp được thiết kế riêng, chính xác như một người bạn đồng hành thông minh.',
    points: [
      {
        title: 'Hiểu rõ từng người',
        description:
          'AI phân tích tình trạng sức khỏe riêng biệt của bạn và người thân, từ thói quen hàng ngày đến triệu chứng cụ thể.',
      },
      {
        title: 'Lời khuyên dành riêng',
        description:
          'Gợi ý chế độ ăn, bài tập, hay cách nghỉ ngơi phù hợp với từng độ tuổi và lối sống.',
      },
      {
        title: 'Theo dõi thông minh',
        description:
          'Cập nhật tình trạng sức khỏe theo thời gian, như một cuốn nhật ký sống động cho cả gia đình',
      },
    ],
    image: 'https://picsum.photos/800/500',
  },
  {
    id: 'trusted-source',
    title: 'Kiến thức chuẩn y khoa',
    subtitle: 'Niềm tin trong từng câu trả lời',
    description:
      'Bạn lo lắng về những thông tin trôi nổi trên mạng? Với AI Sức Khỏe, mọi câu trả lời đều được xây dựng từ nguồn dữ liệu y khoa hàng đầu thế giới, được kiểm chứng bởi các chuyên gia. Từ cách xử lý cơn sốt của bé đến bí quyết giữ sức khỏe cho người lớn tuổi – chúng tôi mang đến sự an tâm tuyệt đối cho gia đình bạn.',
    points: [
      {
        title: 'Nguồn đáng tin cậy',
        description:
          'Dựa trên nghiên cứu y khoa cập nhật và tài liệu từ các tổ chức sức khỏe uy tín toàn cầu',
      },
      {
        title: 'Dễ hiểu, chính xác',
        description: 'Biến những thông tin phức tạp thành lời khuyên đơn giản, áp dụng được ngay',
      },
      {
        title: 'Cập nhật liên tục',
        description: 'Luôn đồng hành cùng bạn với kiến thức mới nhất, không lỗi thời',
      },
    ],
    image: 'https://picsum.photos/800/500',
  },
  {
    id: 'match-doctor',
    title: 'Bác sĩ giỏi',
    subtitle: 'Chỉ một cú nhấp cho sức khỏe của bạn',
    description:
      'Tìm bác sĩ không còn là nỗi đau đầu! AI Sức Khỏe phân tích tình trạng của bạn hoặc người thân, từ triệu chứng nhỏ đến vấn đề phức tạp, rồi kết nối ngay với bác sĩ chuyên khoa phù hợp nhất. Dù là khám online hay gặp trực tiếp, chúng tôi đảm bảo bạn gặp đúng người, đúng lúc',
    points: [
      {
        title: 'Kết nối chính xác',
        description:
          'Tìm bác sĩ dựa trên chuyên môn, kinh nghiệm và tình trạng sức khỏe cụ thể của bạn.',
      },
      {
        title: 'Tiết kiệm thời gian',
        description:
          'Quên đi việc tìm kiếm mò mẫm – AI mang bác sĩ đến với bạn chỉ trong tích tắc.',
      },
      {
        title: 'Linh hoạt lựa chọn',
        description:
          'Hỗ trợ tư vấn từ xa hoặc đặt lịch khám trực tiếp, phù hợp với mọi nhu cầu gia đình.',
      },
    ],
    image: 'https://picsum.photos/800/500',
  },
]

export default function Features() {
  return (
    <div className="flex flex-col gap-y-[30vw] sm:gap-y-[10vw]">
      {features.map((feature, index) => (
        <section key={feature.id}>
          <div
            className={`mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary uppercase">AI Features</p>
              <h2 className="text-4xl font-bold text-white">
                {feature.title} <span className="text-blue-500"> {feature.subtitle}</span>
              </h2>
              <p className="text-lg text-muted-foreground">{feature.description}</p>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center space-x-2 text-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{point.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <motion.div
              className="relative h-[30vw]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
