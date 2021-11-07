const img1 = require("../images/slider/slide_1.png").default
const img2 = require("../images/slider/dior.png").default
const img3 = require("../images/slider/chanel.png").default

const heroSliderData = [
    {
        title: "MISS DIOR",
        description: "Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời trang nào. Sợi vải pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ dệt tân tiến. Điều đó làm cho kết cấu áo polo chắc chắn, bền chặt, hạn chế tối đa xù lông, mềm mượt, bền màu, vô cùng đảm bảo sức khoẻ người dùng",
        img: img1,
        color: "pink",
        path: "/catalog/beauty-C099600764-miss-dior-eau-de-parfum"
    },
    {
        title: "SAUVAGE ELIXIR",
        description: "Sauvage Elixir is an extraordinarily* concentrated fragrance steeped in the emblematic freshness of Sauvage with an intoxicating heart of Spices, a & #34 tailor-made & #34 Lavender essence and a blend of rich Woods forming the signature of its powerful, lavish and captivating trail.",
        img: img2,
        path: "/catalog/beauty-C099600755-sauvage-elixir",
        color: "black"
    },
    {
        title: "BLEU DE CHANEL",
        description: "An ode to masculine freedom expressed in an aromatic-woody fragrance with a captivating trail. A timeless scent housed in a bottle of deep and mysterious blue.",
        img: "gs://time-table-e543e.appspot.com/chanel.png",
        path: "/catalog/bleu-de-chanel-eau-de-parfum-spray",
        color: "black"
    }
]

export default heroSliderData