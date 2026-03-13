// Site Data Centralization for easy management
import civil1 from '../assets/images/civil/xay-dung-dan-dung-1.jpg';
import civil2 from '../assets/images/civil/xay-dung-dan-dung-2.jpg';
import civil3 from '../assets/images/civil/xay-dung-dan-dung-3.jpg';
import civil4 from '../assets/images/civil/xay-dung-dan-dung-4.jpg';
import elev1 from '../assets/images/elevators/tk-lap-dat-thang-may-1.jpg';
import elev2 from '../assets/images/elevators/tk-lap-dat-thang-may-2.jpg';
import elev3 from '../assets/images/elevators/tk-lap-dat-thang-may-3.jpg';
import elev4 from '../assets/images/elevators/tk-lap-dat-thang-may-4.jpg';
import aboutImg from '../assets/images/banners/artboard-2b.jpg';

export const siteData = {
    general: {
        companyName: 'Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành',
        phone: '0972 524 799',
        email: 'vietthanh.me.con@gmail.com',
        website: 'vithacon.vn',
        addressHCM: '122/118, KP. Tân Lập, P. Đông Hòa, TP. Hồ Chí Minh',
        addressDakLak: 'Milano ML127 KĐT Ecocity Premia, P. Tân An, Đắk Lắk',
        license: '3702556996 (Cấp ngày 25/04/2017)',
        representative: 'Lê Quang Khải'
    },
    hero: {
        title: 'VIỆT THÀNH',
        subtitle: 'CHUYÊN NGHIỆP - CHẤT LƯỢNG - BỀN VỮNG',
        description: 'Giải pháp thiết kế và thi công nhà thép tiền chế, xây dựng dân dụng trọn gói hàng đầu.'
    },
    about: {
        title: 'Về Chúng Tôi',
        heading: 'Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành',
        description1: 'Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín hàng đầu trong lĩnh vực thiết kế và thi công nhà thép tiền chế, xây dựng dân dụng tại khu vực Tây Nguyên và các tỉnh phía Nam.',
        description2: 'Với đội ngũ kỹ sư tâm huyết và quy trình thi công chuyên nghiệp, chúng tôi mang đến những giải pháp tối ưu về kết cấu, đảm bảo tính thẩm mỹ cao và tiết kiệm chi phí tối đa cho nhà đầu tư. Việt Thành luôn cam kết chất lượng bền vững cho mọi công trình.',
        experienceYears: '10+',
        experienceText: 'Năm Kinh Nghiệm',
        image: aboutImg,
        features: [
            'Khảo sát công trình miễn phí',
            'Giám sát thi công 24/24',
            'Không phát sinh chi phí',
            'Cam kết thi công đúng hạn'
        ]
    },
    services: {
        subtitle: 'LĨNH VỰC HOẠT ĐỘNG',
        title: 'Dịch Vụ Thiết Kế Thi Công',
        desc1: 'Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín trong lĩnh vực thiết kế và thi công nhà thép tiền chế, xây dựng dân dụng và lắp đặt thang máy tại khu vực Tây Nguyên và miền Nam.',
        desc2: 'Với đội ngũ kỹ sư giàu kinh nghiệm và quy trình làm việc chuyên nghiệp, chúng tôi cam kết mang đến những giải pháp tối ưu về kết cấu, thẩm mỹ và chi phí, đảm bảo sự hài lòng tuyệt đối cho mọi khách hàng.',
        list: [
            {
                title: 'Nhà Thép Tiền Chế Showroom',
                desc: 'Thiết kế showroom nổi bật, đẹp mắt giúp nâng cao hiệu quả kinh doanh. Nhà tiền chế cho phép xây dựng nhanh chóng, không gian rộng rãi và thẩm mỹ cao.',
                icon: '🏢'
            },
            {
                title: 'Xây Dựng Dân Dụng',
                desc: 'Chuyên thi công, thiết kế các công trình xây dựng uy tín. Mang đến cho khách hàng những công trình tuyệt đẹp, chất lượng và bền vững theo thời gian.',
                icon: '🏠'
            },
            {
                title: 'Lắp Đặt Thang Máy',
                desc: 'Cung cấp dịch vụ thiết kế và thi công lắp đặt thang máy an toàn, hiệu quả. Đội ngũ kỹ sư đảm bảo hệ thống hoạt động ổn định, đạt chuẩn cho mọi công trình.',
                icon: '🛗'
            },
            {
                title: 'Bảo Dưỡng Cầu Trục',
                desc: 'Tư vấn, thiết kế, thi công và bảo dưỡng cầu trục chất lượng cao. Báo giá chi tiết dựa trên khẩu độ, chiều cao, tốc độ và môi trường vận hành.',
                icon: '⚙️'
            }
        ]
    },
    projects: {
        title: 'Dự Án Tiêu Biểu',
        subtitle: 'Minh chứng cho chất lượng và năng lực thi công của Việt Thành qua các công trình quy mô.',
        list: [
            { title: 'Công trình Công ty Đạt Vĩnh Tiến', category: 'Thi Công Nhà Xưởng', img: civil1 },
            { title: 'Dự án Holme - Tập đoàn Hòa Bình', category: 'Xây Dựng Căn Hộ', img: civil2 },
            { title: 'Nhà máy Garment Factory', category: 'Kết Cấu Thép', img: civil3 },
            { title: 'Khu nhà xưởng Nhà máy Kenda', category: 'Thi Công Nhà Xưởng', img: civil4 },
            { title: 'Mái kính khu nhà ở Nam Sài Gòn', category: 'Xây Dựng Dân Dụng', img: elev1 },
            { title: 'Nhà máy điện tử Hiệp Phước 2', category: 'Kết Cấu Thép', img: elev2 },
            { title: 'Công ty Kim Thụy Phúc VN', category: 'Thi Công Nhà Xưởng', img: elev3 },
            { title: 'Nhà máy gạch không nung Việt Tân', category: 'Xây Dựng Công Nghiệp', img: elev4 },
            { title: 'Vườn ươm công nghiệp Hàn Quốc Việt Nam', category: 'Thi Công Chọn Gói', img: civil1 },
            { title: 'Thi công Nhà xưởng Nội thất', category: 'Xây Dựng Dân Dụng', img: civil2 }
        ]
    },
    workflow: {
        title: 'Quy Trình Làm Việc',
        subtitle: 'Chuyên nghiệp, bài bản trong từng bước thực hiện dự án.',
        steps: [
            { title: 'Tiếp nhận thông tin', desc: 'Lắng nghe và ghi nhận đầy đủ nhu cầu của khách hàng.' },
            { title: 'Khảo sát & tư vấn', desc: 'Khảo sát thực tế, đưa ra giải pháp thiết kế tối ưu.' },
            { title: 'Tiến hành báo giá', desc: 'Cung cấp bảng báo giá chi tiết và minh bạch nhất.' },
            { title: 'Ký kết hợp đồng', desc: 'Xác định rõ trách nhiệm và quyền lợi của hai bên.' },
            { title: 'Thực hiện thi công', desc: 'Triển khai chuyên nghiệp, nhanh chóng và chất lượng.' },
            { title: 'Nghiệm thu bảo hành', desc: 'Nghiệm thu kỹ lưỡng và bảo hành dài hạn.' }
        ]
    }
};
