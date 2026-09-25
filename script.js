/* ═══════════════════════════════════════════════════════════════
   HDC Fashion – Interactive Enterprise Portal Scripts
   Tập Đoàn HDC (Niêm Yết) · 10 Năm Phát Triển Bền Vững
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ─── 1. COMPREHENSIVE PRODUCT DATABASE (Based on Catalogue PDF) ─── */
  const PRODUCTS = {
    'hdc-polo-01': {
      id: 'hdc-polo-01',
      sku: 'HDC-PL01',
      category: 'polo',
      categoryName: 'Áo Polo Doanh Nghiệp',
      name: 'Áo Polo Pique Cotton Compact Bo Cổ Chống Quăn',
      price: '260.000đ',
      priceOld: '320.000đ',
      priceRaw: 260000,
      badge: 'BÁN CHẠY',
      badgeClass: 'hot',
      rating: '5.0',
      reviews: '120+ Doanh nghiệp đã đặt',
      moq: 'Từ 20 áo',
      images: [
        'assets/images/catalog_img_07.jpg',
        'assets/images/catalog_img_10.jpg',
        'assets/images/catalog_img_14.jpg'
      ],
      colors: [
        { name: 'Xanh Navy Doanh Nghiệp', hex: '#1e3a5f' },
        { name: 'Trắng Sứ Tinh Khôi', hex: '#ffffff', border: true },
        { name: 'Đen Sang Trọng', hex: '#2c3e50' },
        { name: 'Đỏ Đô Nổi Bật', hex: '#b91c1c' }
      ],
      tiers: [
        { qty: '20 – 50 áo', price: '260.000đ' },
        { qty: '51 – 150 áo', price: '230.000đ (-12%)' },
        { qty: '151 – 500 áo', price: '195.000đ (-25%)' },
        { qty: '> 500 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Dệt Pique mắt chim từ sợi Cotton Compact 100% thoáng khí, thấm hút mồ hôi 24h',
        'Bo cổ và bo tay dệt Jacquard mật độ cao công nghệ chống quăn mép sau giặt',
        'Công nghệ may viền liền mạch Seamless tại nẹp áo, không cộm ngứa hay khó chịu',
        'Thêu vi tính 3D chỉ kim tuyến Tajima Nhật Bản sắc nét từng chi tiết logo'
      ],
      desc: 'Mẫu áo Polo tiêu chuẩn doanh nghiệp bán chạy nhất tại HDC Fashion trong 5 năm liên tiếp. Thiết kế chuẩn form dáng người Châu Á, thích hợp cho khối văn phòng, sự kiện khách hàng, cán bộ quản lý và hội thảo thường niên.',
      fabrics: [
        'Chất liệu: 95% Cotton Compact chải kỹ + 5% sợi Spandex đàn hồi 4 chiều',
        'Định lượng chuẩn: 230 gsm dày dặn, đứng form và không lộ khuyết điểm',
        'Chỉ số chống nắng tia UV UPF 50+ bảo vệ làn da tối ưu ngoài trời',
        'Độ bền màu cấp 4-5 theo tiêu chuẩn quốc tế ISO 105, không xù lông đổ hạt'
      ]
    },

    'hdc-polo-02': {
      id: 'hdc-polo-02',
      sku: 'HDC-PL02',
      category: 'polo',
      categoryName: 'Áo Polo Sinh Thái',
      name: 'Áo Polo Sợi Tre Bamboo Kháng Khuẩn & Chống Tia UV',
      price: '295.000đ',
      priceOld: '350.000đ',
      priceRaw: 295000,
      badge: 'SỢI TRE 100%',
      badgeClass: 'eco',
      rating: '5.0',
      reviews: '85+ Tập đoàn đã đặt',
      moq: 'Từ 20 áo',
      images: [
        'assets/images/catalog_img_10.jpg',
        'assets/images/catalog_img_07.jpg',
        'assets/images/catalog_img_16.jpg'
      ],
      colors: [
        { name: 'Xanh Ngọc Sinh Thái', hex: '#0f766e' },
        { name: 'Trắng Sợi Tre Tự Nhiên', hex: '#ffffff', border: true },
        { name: 'Xanh Đậm Sang Trọng', hex: '#1e3a5f' },
        { name: 'Vàng Kem Nhã Nhặn', hex: '#f39c12' }
      ],
      tiers: [
        { qty: '20 – 50 áo', price: '295.000đ' },
        { qty: '51 – 150 áo', price: '255.000đ (-14%)' },
        { qty: '151 – 500 áo', price: '215.000đ (-27%)' },
        { qty: '> 500 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Chiết xuất 100% từ cellulose thân tre thiên nhiên Việt Nam, phân hủy sinh học',
        'Kháng khuẩn tự nhiên không cần hóa chất, khử mùi mồ hôi tối đa suốt ngày dài',
        'Cảm giác chạm mát lạnh ngay tức thì, giảm 2-3°C so với nhiệt độ cơ thể bên ngoài',
        'Khả năng chống tia cực tím UPF 50+ vượt trội theo tiêu chuẩn OEKO-TEX 100'
      ],
      desc: 'Dòng áo Polo xanh đại diện cho định hướng thời trang bền vững của Tập đoàn HDC. Được các ngân hàng, tập đoàn bất động sản và các doanh nghiệp ESG ưu tiên lựa chọn để khẳng định cam kết bảo vệ môi trường.',
      fabrics: [
        'Thành phần: 65% Bamboo sợi tre tự nhiên, 30% Cotton sinh học, 5% Elastane',
        'Độ mềm mịn mượt mà như lụa, không kích ứng dù là làn da nhạy cảm nhất',
        'Khả năng tự kháng khuẩn tự nhiên đạt 99.8% sau 50 lần giặt',
        'Trọng lượng siêu nhẹ chỉ 135g/áo giúp tối đa hóa sự năng động và linh hoạt'
      ]
    },

    'hdc-shirt-01': {
      id: 'hdc-shirt-01',
      sku: 'HDC-SM01',
      category: 'shirt',
      categoryName: 'Áo Sơ Mi Công Sở',
      name: 'Sơ Mi Nam Công Sở Sợi Tre Bamboo Slim Fit Cao Cấp',
      price: '340.000đ',
      priceOld: '420.000đ',
      priceRaw: 340000,
      badge: 'CHỐNG NHĂN',
      badgeClass: 'sale',
      rating: '5.0',
      reviews: '210+ Doanh nghiệp tin dùng',
      moq: 'Từ 20 áo',
      images: [
        'assets/images/catalog_img_05.jpg',
        'assets/images/catalog_img_08.jpg',
        'assets/images/catalog_img_12.jpg'
      ],
      colors: [
        { name: 'Trắng Tinh Khôi', hex: '#ffffff', border: true },
        { name: 'Xanh Dương Nhạt', hex: '#bfdbfe' },
        { name: 'Ghi Xám Nhẹ', hex: '#e2e8f0' }
      ],
      tiers: [
        { qty: '20 – 50 áo', price: '340.000đ' },
        { qty: '51 – 150 áo', price: '295.000đ (-13%)' },
        { qty: '151 – 500 áo', price: '245.000đ (-28%)' },
        { qty: '> 500 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Sợi Bamboo kết hợp Spandex chống nhăn tự nhiên, tiết kiệm thời gian là ủi',
        'Form dáng Slim Fit may đo chuẩn Châu Á, tôn đường nét cơ thể nam tính',
        'Cổ áo ép keo nhiệt công nghệ cao chống gãy gập, giữ phom phẳng phiu suốt 12h',
        'Đường may cuộn chỉ đôi 18 mũi chỉ/inch tỉ mỉ, độ bền đường chỉ trên 5 năm'
      ],
      desc: 'Áo sơ mi nam công sở cao cấp may từ chất liệu sợi tre Bamboo. Sản phẩm được đông đảo ngân hàng, công ty tài chính, bảo hiểm và công ty luật đặt may làm đồng phục nhận diện thương hiệu.',
      fabrics: [
        'Thành phần: 50% Bamboo, 45% Microfiber Cotton, 5% Spandex chống nhăn',
        'Bề mặt vải có độ bóng nhẹ sang trọng, thấm hút mồ hôi gấp 3 lần cotton thường',
        'Kháng khuẩn tự nhiên và khử mùi cơ thể hiệu quả trong môi trường văn phòng máy lạnh',
        'Được xử lý hoàn tất công nghệ Silk Soft Touch cho cảm giác mặc êm ái'
      ]
    },

    'hdc-shirt-02': {
      id: 'hdc-shirt-02',
      sku: 'HDC-SM02',
      category: 'shirt',
      categoryName: 'Áo Sơ Mi Oxford',
      name: 'Áo Sơ Mi Oxford Xanh Pastel Dệt Sợi Đôi Chống Nhăn',
      price: '360.000đ',
      priceOld: '450.000đ',
      priceRaw: 360000,
      badge: 'MỚI 2024',
      badgeClass: 'new',
      rating: '4.9',
      reviews: '64 Doanh nghiệp đã đặt',
      moq: 'Từ 20 áo',
      images: [
        'assets/images/catalog_img_08.jpg',
        'assets/images/catalog_img_05.jpg',
        'assets/images/catalog_img_15.jpg'
      ],
      colors: [
        { name: 'Xanh Pastel Thanh Lịch', hex: '#a8c8e8' },
        { name: 'Trắng Cổ Điển', hex: '#ffffff', border: true },
        { name: 'Hồng Nhạt Trẻ Trung', hex: '#fed7aa' }
      ],
      tiers: [
        { qty: '20 – 50 áo', price: '360.000đ' },
        { qty: '51 – 150 áo', price: '315.000đ (-12%)' },
        { qty: '151 – 500 áo', price: '265.000đ (-26%)' },
        { qty: '> 500 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Vải Oxford dệt rổ đôi cao cấp tạo cấu trúc xốp nhẹ và độ thoáng khí tuyệt đối',
        'Tông màu xanh Pastel thanh lịch, dễ phối cùng quần âu, chân váy hay vest',
        'Khuy áo đính chắc chắn 4 lỗ khắc laser logo HDC tinh xảo',
        'May cuộn mép sườn kín hạn chế tối đa cảm giác cọ xát vào da'
      ],
      desc: 'Mẫu sơ mi Oxford hiện đại mang phong cách Ivy League lịch lãm. Vừa phù hợp với các buổi họp trang trọng, vừa trẻ trung cho các ngày làm việc năng động tại văn phòng.',
      fabrics: [
        'Chất liệu: 100% Cotton Oxford chải kỹ sợi đôi nhập khẩu',
        'Trọng lượng vải: 140 gsm mềm mại nhưng đứng form chuẩn mực',
        'Công nghệ chống co rút sau giặt (Sanforized Process) đạt chuẩn quốc tế',
        'An toàn lành tính cho mọi loại da, không hóa chất nhuộm độc hại'
      ]
    },

    'hdc-shirt-03': {
      id: 'hdc-shirt-03',
      sku: 'HDC-SM03',
      category: 'shirt',
      categoryName: 'Sơ Mi Nữ Thiết Kế',
      name: 'Sơ Mi Nữ Công Sở Cổ V Dáng Lỡ Lụa Sinh Học Rũ Nhẹ',
      price: '310.000đ',
      priceOld: '390.000đ',
      priceRaw: 310000,
      badge: 'NỮ CÔNG SỞ',
      badgeClass: 'hot',
      rating: '5.0',
      reviews: '98 Doanh nghiệp đã đặt',
      moq: 'Từ 20 áo',
      images: [
        'assets/images/catalog_img_12.jpg',
        'assets/images/catalog_img_08.jpg',
        'assets/images/catalog_img_15.jpg'
      ],
      colors: [
        { name: 'Trắng Sữa', hex: '#ffffff', border: true },
        { name: 'Hồng Nude Dịu Dàng', hex: '#fce7f3' },
        { name: 'Xanh Khói Hiện Đại', hex: '#e0f2fe' }
      ],
      tiers: [
        { qty: '20 – 50 áo', price: '310.000đ' },
        { qty: '51 – 150 áo', price: '270.000đ (-13%)' },
        { qty: '151 – 500 áo', price: '225.000đ (-27%)' },
        { qty: '> 500 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Thiết kế cổ V thanh thoát giúp kéo dài tỷ lệ cổ, tôn nét đẹp thanh lịch nữ tính',
        'Chất liệu lụa sinh học rũ nhẹ, hạn chế bám bụi bẩn và chống tĩnh điện mùa đông',
        'Tay lỡ bồng nhẹ che khuyết điểm bắp tay, thoải mái gõ máy tính và di chuyển',
        'Form suông nhẹ phối chiết eo tinh tế, vừa vặn cho mọi vóc dáng phụ nữ Việt'
      ],
      desc: 'Mẫu sơ mi công sở nữ được thiết kế độc quyền bởi các nhà tạo mẫu HDC Fashion, mang lại vẻ ngoài chuyên nghiệp, duyên dáng và đầy tự tin cho nữ nhân sự doanh nghiệp.',
      fabrics: [
        'Thành phần: 60% Sợi lụa sinh thái Modal, 35% Cotton lụa, 5% Spandex co giãn',
        'Khả năng chống nhăn tự nhiên 90%, không tốn thời gian ủi mỗi sáng',
        'Mát mẻ vào mùa hè, giữ nhiệt nhẹ dịu vào mùa thu đông',
        'Bề mặt bóng ngọc trai tinh tế, nâng tầm hình ảnh thương hiệu công ty'
      ]
    },

    'hdc-vest-01': {
      id: 'hdc-vest-01',
      sku: 'HDC-VS01',
      category: 'vest',
      categoryName: 'Vest & Blazer Nam',
      name: 'Bộ Vest Nam Doanh Nhân 2 Cúc Form Chuẩn Châu Âu',
      price: '1.450.000đ',
      priceOld: '1.800.000đ',
      priceRaw: 1450000,
      badge: 'EXECUTIVE VIP',
      badgeClass: 'gold',
      rating: '5.0',
      reviews: '42 Tập đoàn đặt may',
      moq: 'Từ 10 bộ',
      images: [
        'assets/images/catalog_img_09.jpg',
        'assets/images/catalog_img_14.jpg',
        'assets/images/catalog_img_18.jpg'
      ],
      colors: [
        { name: 'Xanh Đen Doanh Nhân', hex: '#1e293b' },
        { name: 'Đen Tuyệt Đối', hex: '#0f172a' },
        { name: 'Ghi Xám Đẳng Cấp', hex: '#475569' }
      ],
      tiers: [
        { qty: '10 – 30 bộ', price: '1.450.000đ' },
        { qty: '31 – 100 bộ', price: '1.250.000đ (-14%)' },
        { qty: '101 – 300 bộ', price: '1.050.000đ (-28%)' },
        { qty: '> 300 bộ', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Dựng form ve áo bằng canvas cao cấp, không bị phồng rộp hay xẹp sau khi giặt khô',
        'Đệm vai nhập khẩu định hình bờ vai vuông vức, đĩnh đạc và uy quyền',
        'Lớp lót lụa tơ tằm mềm mại, thoáng khí tuyệt đối không gây cảm giác bí bách',
        'Hỗ trợ lấy số đo tận nơi cho ban lãnh đạo và cán bộ quản lý'
      ],
      desc: 'Bộ vest nam doanh nhân đỉnh cao từ HDC Fashion, kết hợp giữa kỹ thuật may thủ công truyền thống và dây chuyền công nghệ may ép tự động nhập khẩu Đức.',
      fabrics: [
        'Chất liệu chính: Vải Wool pha Cashmere cao cấp nhập khẩu',
        'Lót trong: 100% Lụa Bemberg thoáng khí, chống tích điện',
        'Khuy sừng tự nhiên bền bỉ mạ bóng mờ sang trọng',
        'Đạt tiêu chuẩn xuất khẩu may đo cao cấp sang thị trường Nhật & Châu Âu'
      ]
    },

    'hdc-vest-02': {
      id: 'hdc-vest-02',
      sku: 'HDC-VS02',
      category: 'vest',
      categoryName: 'Blazer Nữ Cao Cấp',
      name: 'Áo Blazer Nữ Doanh Nghiệp Form Hiện Đại Tôn Dáng',
      price: '1.250.000đ',
      priceOld: '1.550.000đ',
      priceRaw: 1250000,
      badge: 'THANH LỊCH',
      badgeClass: 'new',
      rating: '4.9',
      reviews: '53 Doanh nghiệp đã đặt',
      moq: 'Từ 10 áo',
      images: [
        'assets/images/catalog_img_15.jpg',
        'assets/images/catalog_img_09.jpg',
        'assets/images/catalog_img_12.jpg'
      ],
      colors: [
        { name: 'Xám Ghi Thời Thượng', hex: '#334155' },
        { name: 'Xanh Đen Quyền Lực', hex: '#1e293b' },
        { name: 'Be Sữa Dịu Dàng', hex: '#e2e8f0' }
      ],
      tiers: [
        { qty: '10 – 30 áo', price: '1.250.000đ' },
        { qty: '31 – 100 áo', price: '1.080.000đ (-14%)' },
        { qty: '101 – 300 áo', price: '890.000đ (-29%)' },
        { qty: '> 300 áo', price: 'Giá VIP Nhà máy' }
      ],
      highlights: [
        'Thiết kế ve lếch thời thượng, đường cắt eo tôn vóc dáng đồng hồ cát',
        'Chất liệu tuyết mưa cao cấp dệt sợi đanh mịn, giữ nếp phẳng phiu tuyệt đối',
        'Túi áo mổ 2 viền tinh xảo, cúc kim loại bọc vải đồng màu đẳng cấp',
        'Dễ dàng kết hợp cùng sơ mi, áo thun polo hoặc chân váy bút chì'
      ],
      desc: 'Áo Blazer nữ đồng phục đại diện cho hình ảnh người phụ nữ hiện đại, tự tin và bản lĩnh trong thời kỳ mới. Phù hợp cho khối lãnh đạo nữ, lễ tân khách sạn 5 sao và chuyên viên tư vấn cao cấp.',
      fabrics: [
        'Vải tuyết mưa Hàn Quốc cao cấp pha 4% Spandex co giãn nhẹ êm',
        'Lớp lót Habutai mỏng nhẹ, thấm hút mồ hôi tối ưu',
        'Chống bám bụi, chống xù lông tuyệt đối qua các mùa sử dụng',
        'Giữ màu nguyên vẹn sau nhiều năm giặt hấp công nghiệp'
      ]
    },

    'hdc-tshirt-01': {
      id: 'hdc-tshirt-01',
      sku: 'HDC-TS01',
      category: 'tshirt',
      categoryName: 'Áo Thun Doanh Nghiệp',
      name: 'Áo Thun Cổ Tròn Sự Kiện & Teambuilding 100% Cotton 220gsm',
      price: '145.000đ',
      priceOld: '180.000đ',
      priceRaw: 145000,
      badge: 'SỰ KIỆN',
      badgeClass: 'hot',
      rating: '5.0',
      reviews: '350+ Sự kiện đã may',
      moq: 'Từ 30 áo',
      images: [
        'assets/images/catalog_img_16.jpg',
        'assets/images/catalog_img_18.jpg',
        'assets/images/catalog_img_24.jpg'
      ],
      colors: [
        { name: 'Trắng Cơ Bản', hex: '#ffffff', border: true },
        { name: 'Đỏ Năng Động', hex: '#dc2626' },
        { name: 'Xanh Royal Trẻ Trung', hex: '#2563eb' },
        { name: 'Xanh Lá Tươi Mát', hex: '#16a34a' },
        { name: 'Vàng Cam Nổi Bật', hex: '#f59e0b' }
      ],
      tiers: [
        { qty: '30 – 100 áo', price: '145.000đ' },
        { qty: '101 – 300 áo', price: '120.000đ (-17%)' },
        { qty: '301 – 1.000 áo', price: '95.000đ (-34%)' },
        { qty: '> 1.000 áo', price: 'Giá Siêu Sỉ Nhà máy' }
      ],
      highlights: [
        'Vải 100% Cotton Compact 220gsm dày dặn, thấm hút mồ hôi tối đa ngoài trời',
        'Hỗ trợ công nghệ in lụa dẻo Plastisol và in chuyển nhiệt kỹ thuật số sắc nét',
        'Cổ áo dệt rib 2x2 bo dày dặn, không bị giãn nhão hay bai cổ sau giặt máy',
        'Đường may kansai 3 kim ở gấu áo và tay áo tăng cường độ bền vận động mạnh'
      ],
      desc: 'Mẫu áo thun đồng phục cổ tròn hoàn hảo cho các hoạt động Teambuilding, dã ngoại, hội thao, sự kiện ra mắt sản phẩm và đồng phục nhân viên bán lẻ.',
      fabrics: [
        '100% Cotton chải kỹ tự nhiên không pha nilon nóng bí',
        'Định lượng chuẩn 220 gsm cầm chắc tay và mát mịn',
        'Màu nhuộm an toàn đạt chứng nhận OEKO-TEX Standard 100',
        'Mực in đạt chuẩn Eco-Passport không nứt gãy bong tróc'
      ]
    },

    'hdc-tshirt-02': {
      id: 'hdc-tshirt-02',
      sku: 'HDC-TS02',
      category: 'tshirt',
      categoryName: 'Áo Thể Thao & Marathon',
      name: 'Áo Thun Thể Thao Quick-Dry Thoát Khí Siêu Nhẹ 110g',
      price: '165.000đ',
      priceOld: '210.000đ',
      priceRaw: 165000,
      badge: 'QUICK-DRY',
      badgeClass: 'eco',
      rating: '4.9',
      reviews: '48 Giải chạy & Sự kiện',
      moq: 'Từ 30 áo',
      images: [
        'assets/images/catalog_img_18.jpg',
        'assets/images/catalog_img_16.jpg',
        'assets/images/catalog_img_21.jpg'
      ],
      colors: [
        { name: 'Xanh Da Trời', hex: '#0284c7' },
        { name: 'Xanh Ngọc Thể Thao', hex: '#10b981' },
        { name: 'Xám Đen Hiện Đại', hex: '#1e293b' }
      ],
      tiers: [
        { qty: '30 – 100 áo', price: '165.000đ' },
        { qty: '101 – 300 áo', price: '135.000đ (-18%)' },
        { qty: '301 – 1.000 áo', price: '105.000đ (-36%)' },
        { qty: '> 1.000 áo', price: 'Giá Siêu Sỉ Nhà máy' }
      ],
      highlights: [
        'Cấu trúc dệt mắt kim sa lục giác giúp thoát mồ hôi và bốc hơi chỉ sau 15 phút',
        'Trọng lượng siêu nhẹ chỉ 110 gram, cảm giác mặc nhẹ bẫng tự do',
        'In decal phản quang 3M hỗ trợ vận động an toàn trong điều kiện thiếu sáng',
        'Kháng khuẩn Ag+ khử mùi mồ hôi tối đa khi vận động cường độ cao'
      ],
      desc: 'Dòng áo chuyên dụng cho các câu lạc bộ thể thao, giải chạy Marathon doanh nghiệp, giải Golf và các hoạt động thể chất ngoài trời.',
      fabrics: [
        'Chất liệu: 92% Polyester sợi dẹt cao cấp + 8% Spandex co giãn đa chiều',
        'Xử lý bề mặt công nghệ Wicking Quick-Dry độc quyền',
        'Độ bền màu tuyệt đối trước ánh nắng mặt trời gắt gao',
        'Chống nhăn 100%, không cần ủi, khô ngay sau khi giặt 30 phút'
      ]
    },

    'hdc-school-01': {
      id: 'hdc-school-01',
      sku: 'HDC-SC01',
      category: 'school',
      categoryName: 'Đồng Phục Học Sinh',
      name: 'Bộ Đồng Phục Học Sinh Tiểu Học & Mầm Non Chuẩn Quốc Tế',
      price: '220.000đ',
      priceOld: '290.000đ',
      priceRaw: 220000,
      badge: 'AN TOÀN CHO BÉ',
      badgeClass: 'sale',
      rating: '5.0',
      reviews: '150+ Trường học tin chọn',
      moq: 'Từ 50 bộ',
      images: [
        'assets/images/catalog_img_14.jpg',
        'assets/images/catalog_img_07.jpg',
        'assets/images/catalog_img_11.jpg'
      ],
      colors: [
        { name: 'Xanh Navy Trường Học', hex: '#1e3a5f' },
        { name: 'Đỏ Đô Quốc Tế', hex: '#991b1b' },
        { name: 'Trắng Học Trò', hex: '#ffffff', border: true }
      ],
      tiers: [
        { qty: '50 – 200 bộ', price: '220.000đ' },
        { qty: '201 – 500 bộ', price: '185.000đ (-16%)' },
        { qty: '501 – 2.000 bộ', price: '155.000đ (-30%)' },
        { qty: '> 2.000 bộ', price: 'Giá Thầu Trường Học' }
      ],
      highlights: [
        '100% sợi bông tự nhiên an toàn tuyệt đối, không gây kích ứng cho làn da nhạy cảm',
        'Cạp quần thun co giãn thông minh không cấn bụng, giúp học sinh thoải mái ngồi học',
        'Đường may may đè 2 kim chắc chắn, chịu được giặt máy công nghiệp tần suất cao',
        'Thêu huy hiệu logo trường học bằng chỉ kim vi tính rõ nét không bung sút'
      ],
      desc: 'Bộ đồng phục học sinh chuẩn mực quốc tế bao gồm áo sơ mi/polo kết hợp quần sooc/chân váy. Được thiết kế tối ưu cho học sinh vận động vui chơi và học tập suốt ngày dài.',
      fabrics: [
        'Áo: Cotton pha sợi tre tự nhiên siêu mát, thấm mồ hôi',
        'Quần/Váy: Vải Kaki Cotton thun cao cấp co giãn, không bai xù',
        'Đạt chứng nhận an toàn Formaldehyde 0% theo QCVN 01:2017/BCT',
        'Công nghệ chống bám vết bẩn mực viết và đồ ăn nhẹ'
      ]
    },

    'hdc-school-02': {
      id: 'hdc-school-02',
      sku: 'HDC-SC02',
      category: 'school',
      categoryName: 'Áo Polo Học Sinh',
      name: 'Áo Polo Học Sinh Cổ Bẻ Vải Cá Sấu 4 Chiều Thoáng Mát',
      price: '175.000đ',
      priceOld: '220.000đ',
      priceRaw: 175000,
      badge: 'BỀN ĐẸP',
      badgeClass: 'new',
      rating: '4.9',
      reviews: '112 Trường học',
      moq: 'Từ 50 áo',
      images: [
        'assets/images/catalog_img_11.jpg',
        'assets/images/catalog_img_14.jpg',
        'assets/images/catalog_img_17.jpg'
      ],
      colors: [
        { name: 'Trắng Phối Cổ Xanh', hex: '#ffffff', border: true },
        { name: 'Xanh Navy Toàn Bộ', hex: '#1e3a5f' },
        { name: 'Đỏ Phối Viền Trắng', hex: '#e11d48' }
      ],
      tiers: [
        { qty: '50 – 200 áo', price: '175.000đ' },
        { qty: '201 – 500 áo', price: '145.000đ (-17%)' },
        { qty: '501 – 2.000 áo', price: '120.000đ (-31%)' },
        { qty: '> 2.000 áo', price: 'Giá Thầu Trường Học' }
      ],
      highlights: [
        'Vải cá sấu 4 chiều mềm mịn, co giãn đa chiều cho bé thoải mái chạy nhảy',
        'Cổ dệt bo cao cấp viền sọc thể thao hiện đại, giặt máy không lo quăn góc',
        'Thấm hút mồ hôi cực nhanh, nhanh khô, kháng khuẩn chống hôi mốc mùa mưa',
        'Form áo suông vừa vặn cho cả học sinh nam và nữ'
      ],
      desc: 'Mẫu áo polo đồng phục học sinh phổ biến nhất tại các trường liên cấp quốc tế và trường công lập chất lượng cao trên cả nước.',
      fabrics: [
        'Thành phần: 65% Cotton chải kỹ, 30% Polyester chống nhăn, 5% Spandex co giãn',
        'Trọng lượng vải: 210 gsm mát mẻ và bền bỉ suốt 9 tháng học kỳ',
        'Độ bền xé rách đạt tiêu chuẩn xuất khẩu cao cấp',
        'Giữ màu trắng sáng bền lâu không bị ngả ố vàng'
      ]
    },

    'hdc-corp-01': {
      id: 'hdc-corp-01',
      sku: 'HDC-CP01',
      category: 'corporate',
      categoryName: 'Set Đồng Phục Doanh Nghiệp',
      name: 'Set Đồng Phục Nhận Diện Toàn Diện (Sơ Mi + Polo + Quần Âu)',
      price: '680.000đ',
      priceOld: '850.000đ',
      priceRaw: 680000,
      badge: 'TRỌN GÓI B2B',
      badgeClass: 'gold',
      rating: '5.0',
      reviews: '280+ Doanh nghiệp lớn',
      moq: 'Từ 30 set',
      images: [
        'assets/images/catalog_img_21.jpg',
        'assets/images/catalog_img_05.jpg',
        'assets/images/catalog_img_09.jpg'
      ],
      colors: [
        { name: 'Bộ Nhận Diện Navy Doanh Nghiệp', hex: '#1e3a5f' },
        { name: 'Bộ Nhận Diện Đen Quyền Lực', hex: '#0f172a' },
        { name: 'Bộ Nhận Diện Ghi Xám Thời Thượng', hex: '#475569' }
      ],
      tiers: [
        { qty: '30 – 100 set', price: '680.000đ' },
        { qty: '101 – 300 set', price: '580.000đ (-15%)' },
        { qty: '301 – 1.000 set', price: '490.000đ (-28%)' },
        { qty: '> 1.000 set', price: 'Giá Gói Thầu VIP' }
      ],
      highlights: [
        'Gói trọn bộ trang phục công sở: 01 Áo sơ mi Bamboo + 01 Áo Polo + 01 Quần âu cao cấp',
        'Đồng bộ 100% hệ thống màu sắc theo chuẩn nhận diện thương hiệu công ty',
        'Tặng kèm cavat thêu logo hoặc khăn lụa tơ tằm thiết kế riêng cho phái nữ',
        'Ký hợp đồng pháp lý minh bạch của công ty niêm yết, cam kết đúng hạn khai trương'
      ],
      desc: 'Giải pháp đồng phục doanh nghiệp toàn diện dành cho các tập đoàn, ngân hàng, công ty chứng khoán và bất động sản muốn xây dựng hình ảnh chuyên nghiệp vững chắc trong mắt đối tác và khách hàng.',
      fabrics: [
        'Áo sơ mi: Sợi tre Bamboo chống nhăn tuyệt đối',
        'Áo Polo: Pique Cotton Compact co giãn 4 chiều liền mạch',
        'Quần âu: Vải Cashmere len pha Spandex đứng ly, tôn dáng',
        'Bảo hành đổi trả miễn phí và may bổ sung không tăng giá suốt 2 năm'
      ]
    }
  };

  /* ─── 2. TAB NAVIGATION & SMOOTH FILTER SCROLL ───────────────── */
  const productFiltersContainer = document.getElementById('product-filters');
  const filterBtns = document.querySelectorAll('.products__filter');
  const productCards = document.querySelectorAll('.product-card');
  const productsHeading = document.getElementById('products-heading');
  const productsSubheading = document.getElementById('products-subheading');

  const CATEGORY_TITLES = {
    'all': {
      title: 'Bộ Sưu Tập Đồng Phục HDC Fashion',
      desc: 'Khám phá chi tiết từng dòng sản phẩm với chất liệu cao cấp, bảng size và báo giá sỉ theo số lượng'
    },
    'polo': {
      title: 'Áo Polo Doanh Nghiệp & Sợi Tre Bamboo',
      desc: 'Dòng áo polo bán chạy số 1 – Dệt Pique mắt chim thoáng khí, bo cổ chống quăn mép, may liền mạch Seamless'
    },
    'shirt': {
      title: 'Áo Sơ Mi Công Sở & Executive Shirts',
      desc: 'Chất liệu sợi tre Bamboo và Oxford cao cấp chống nhăn tuyệt đối, form dáng Slim Fit chuẩn mực Châu Á'
    },
    'tshirt': {
      title: 'Áo Thun Cổ Tròn Sự Kiện & Teambuilding',
      desc: '100% Cotton 220gsm dày dặn và vải Quick-Dry siêu nhẹ 110g, in thêu kỹ thuật số sắc nét bền màu'
    },
    'vest': {
      title: 'Vest Nam & Blazer Nữ Doanh Nhân Cao Cấp',
      desc: 'Kỹ thuật may đo chuẩn form Châu Âu, ve áo canvas không xẹp, lớp lót lụa tơ tằm mát mịn đẳng cấp'
    },
    'school': {
      title: 'Đồng Phục Học Sinh & Trường Quốc Tế',
      desc: 'Vải mềm nhẹ, thân thiện cho làn da nhạy cảm của học sinh, chịu được giặt máy công nghiệp tần suất cao'
    },
    'corporate': {
      title: 'Gói Đồng Phục Doanh Nghiệp Toàn Diện',
      desc: 'Giải pháp nhận diện thương hiệu đồng bộ từ A-Z dành cho các tập đoàn, ngân hàng và doanh nghiệp niêm yết'
    }
  };

  const applyProductFilter = (category) => {
    // Update active filter button
    filterBtns.forEach(btn => {
      if (btn.dataset.filter === category) {
        btn.classList.add('products__filter--active');
      } else {
        btn.classList.remove('products__filter--active');
      }
    });

    // Update section text
    if (CATEGORY_TITLES[category]) {
      productsHeading.textContent = CATEGORY_TITLES[category].title;
      productsSubheading.textContent = CATEGORY_TITLES[category].desc;
    }

    // Filter cards
    let visibleCount = 0;
    productCards.forEach((card, index) => {
      const cardCat = card.dataset.category;
      const shouldShow = (category === 'all' || cardCat === category);

      if (shouldShow) {
        card.style.display = '';
        card.style.animation = `fadeUp 0.4s ease ${visibleCount * 50}ms forwards`;
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.style.animation = '';
      }
    });
  };

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      applyProductFilter(cat);
    });
  });

  // Toggle the desktop category dropdown on click instead of navigating away.
  const dropdownItems = document.querySelectorAll('.header__nav-item--has-dropdown');
  dropdownItems.forEach(dropdownItem => {
    const dropdownToggle = dropdownItem.querySelector('.header__nav-link');

    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdownItem.classList.toggle('is-open');
      dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });
  });

  document.addEventListener('click', (e) => {
    dropdownItems.forEach(dropdownItem => {
      if (!dropdownItem.contains(e.target)) {
        dropdownItem.classList.remove('is-open');
        dropdownItem.querySelector('.header__nav-link').setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Handle [data-tab-nav] navigation links in Header, Dropdown, Footer, Mobile Menu
  document.querySelectorAll('[data-tab-nav]').forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      const targetFilter = navLink.dataset.targetFilter;
      const targetHref = navLink.getAttribute('href');

      if (targetFilter && (targetHref === '#products' || targetHref.startsWith('#products'))) {
        e.preventDefault();

        // 1. Scroll smoothly to products section
        const productsSection = document.getElementById('products');
        if (productsSection) {
          const headerOffset = 75;
          const elementPosition = productsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }

        // 2. Automatically apply the matching filter tab
        setTimeout(() => {
          applyProductFilter(targetFilter);
        }, 150);

        // 3. Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('is-open')) {
          mobileToggle.classList.remove('is-active');
          mobileMenu.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      }
    });
  });

  /* ─── 3. HEADER SCROLL & BACK TO TOP ────────────────────────── */
  const header = document.getElementById('main-header');
  const backToTop = document.getElementById('back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    if (scrollY > 600) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─── 4. MOBILE MENU TOGGLE ─────────────────────────────────── */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    // Close when clicking any link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── 5. SEARCH BOX INTERACTION ─────────────────────────────── */
  const searchToggle = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');
  const searchInput = document.getElementById('search-input');

  if (searchToggle && searchBox) {
    searchToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      searchBox.classList.toggle('is-open');
      if (searchBox.classList.contains('is-open')) {
        setTimeout(() => searchInput.focus(), 200);
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
        searchBox.classList.remove('is-open');
      }
    });

    // Simple search filter in product list
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        applyProductFilter('all');
        return;
      }

      productCards.forEach(card => {
        const title = card.querySelector('.product-card__name').textContent.toLowerCase();
        const cat = card.querySelector('.product-card__category').textContent.toLowerCase();
        const sku = card.querySelector('.product-card__sku').textContent.toLowerCase();
        if (title.includes(q) || cat.includes(q) || sku.includes(q)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* ─── 6. PRODUCT DETAIL MODAL SYSTEM ────────────────────────── */
  const productModal = document.getElementById('product-detail-modal');
  const productModalClose = document.getElementById('modal-product-close');

  const modalImg = document.getElementById('modal-product-img');
  const modalBadge = document.getElementById('modal-product-badge');
  const modalThumbs = document.getElementById('modal-product-thumbs');
  const modalCategory = document.getElementById('modal-product-category');
  const modalSku = document.getElementById('modal-product-sku');
  const modalTitle = document.getElementById('modal-product-title');
  const modalRatingText = document.getElementById('modal-product-rating-text');
  const modalPrice = document.getElementById('modal-product-price');
  const modalPriceOld = document.getElementById('modal-product-price-old');
  const modalTierBody = document.getElementById('modal-product-tier-body');
  const modalHighlights = document.getElementById('modal-product-highlights');
  const modalColors = document.getElementById('modal-product-colors');
  const modalSelectedColor = document.getElementById('modal-product-selected-color');
  const modalSizes = document.getElementById('modal-product-sizes');
  const modalDescText = document.getElementById('modal-product-desc-text');
  const modalFabricList = document.getElementById('modal-product-fabric-list');
  const modalBtnOrderSample = document.getElementById('modal-btn-order-sample');

  let currentModalProduct = null;

  const openProductDetail = (productId) => {
    const product = PRODUCTS[productId];
    if (!product) return;
    currentModalProduct = product;

    // Basic meta
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.categoryName;
    modalSku.textContent = `Mã: ${product.sku}`;
    modalRatingText.textContent = `${product.rating} (${product.reviews})`;
    modalPrice.textContent = product.price;
    modalPriceOld.textContent = product.priceOld;
    modalBadge.textContent = product.badge;
    modalBadge.className = `modal-product__badge modal-product__badge--${product.badgeClass}`;

    // Images
    modalImg.src = product.images[0];
    modalThumbs.innerHTML = '';
    product.images.forEach((imgSrc, i) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-thumb ${i === 0 ? 'modal-thumb--active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${i + 1}" />`;
      thumb.addEventListener('click', () => {
        modalImg.src = imgSrc;
        modalThumbs.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('modal-thumb--active'));
        thumb.classList.add('modal-thumb--active');
      });
      modalThumbs.appendChild(thumb);
    });

    // Tier Price Table
    modalTierBody.innerHTML = `
      <tr>
        <td><strong>Đơn giá</strong></td>
        <td>${product.tiers[0].price}</td>
        <td>${product.tiers[1].price}</td>
        <td>${product.tiers[2].price}</td>
        <td class="text-gold font-bold">${product.tiers[3].price}</td>
      </tr>
    `;

    // Highlights (from PDF)
    modalHighlights.innerHTML = product.highlights.map(h => `
      <div class="modal-highlight-item">
        <span class="modal-highlight-check">✓</span>
        <span>${h}</span>
      </div>
    `).join('');

    // Colors
    modalSelectedColor.textContent = product.colors[0].name;
    modalColors.innerHTML = '';
    product.colors.forEach((c, idx) => {
      const dot = document.createElement('span');
      dot.className = `modal-color-dot ${idx === 0 ? 'modal-color-dot--active' : ''}`;
      dot.style.background = c.hex;
      if (c.border) dot.style.border = '1px solid #ccc';
      dot.title = c.name;
      dot.addEventListener('click', () => {
        modalColors.querySelectorAll('.modal-color-dot').forEach(d => d.classList.remove('modal-color-dot--active'));
        dot.classList.add('modal-color-dot--active');
        modalSelectedColor.textContent = c.name;
      });
      modalColors.appendChild(dot);
    });

    // Tabs content
    modalDescText.textContent = product.desc;
    modalFabricList.innerHTML = product.fabrics.map(f => `<li>${f}</li>`).join('');

    // Show modal
    productModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetail = () => {
    productModal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (productModalClose) {
    productModalClose.addEventListener('click', closeProductDetail);
  }

  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductDetail();
  });

  // Attach click listener on all product detail buttons
  document.querySelectorAll('.btn-open-detail, .btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.dataset.productId;
      if (pId) openProductDetail(pId);
    });
  });

  // Allow clicking on product card image to open detail
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on wishlist or color dots
      if (e.target.closest('.btn-wishlist') || e.target.closest('.product-card__color')) return;
      const pId = card.dataset.productId;
      if (pId) openProductDetail(pId);
    });
  });

  // Modal tabs (Mô tả / Chất liệu / Chính sách)
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('modal-tab-btn--active'));
      btn.classList.add('modal-tab-btn--active');

      document.getElementById('modal-tab-desc').style.display = (tabId === 'desc') ? 'block' : 'none';
      document.getElementById('modal-tab-fabrics').style.display = (tabId === 'fabrics') ? 'block' : 'none';
      document.getElementById('modal-tab-policy').style.display = (tabId === 'policy') ? 'block' : 'none';
    });
  });

  // Modal sizes button toggle
  if (modalSizes) {
    modalSizes.querySelectorAll('.size-btn').forEach(sBtn => {
      sBtn.addEventListener('click', () => {
        modalSizes.querySelectorAll('.size-btn').forEach(b => b.classList.remove('size-btn--active'));
        sBtn.classList.add('size-btn--active');
      });
    });
  }

  // Button "ĐẶT MAY MẪU & BÁO GIÁ NGAY" in modal: scroll to B2B Form & autofill
  if (modalBtnOrderSample) {
    modalBtnOrderSample.addEventListener('click', () => {
      closeProductDetail();

      const b2bSection = document.getElementById('b2b-form');
      const productTypeSelect = document.getElementById('product-type');
      const noteInput = document.getElementById('note');
      const companyInput = document.getElementById('company-name');

      if (currentModalProduct) {
        if (productTypeSelect) {
          productTypeSelect.value = currentModalProduct.category || 'other';
        }
        if (noteInput) {
          noteInput.value = `[Yêu cầu mẫu] Tôi muốn nhận tư vấn & bảng báo giá cho sản phẩm: ${currentModalProduct.name} (Mã: ${currentModalProduct.sku}). Vui lòng gửi bảng màu vải thực tế.`;
        }
      }

      if (b2bSection) {
        const offset = 80;
        const pos = b2bSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
        setTimeout(() => {
          if (companyInput) companyInput.focus();
        }, 600);
      }
    });
  }

  /* ─── 7. SIZE GUIDE MODAL ───────────────────────────────────── */
  const sizeModal = document.getElementById('size-guide-modal');
  const sizeModalClose = document.getElementById('modal-size-close');
  const openSizeGuideBtn = document.getElementById('open-size-guide-from-detail');

  if (openSizeGuideBtn && sizeModal) {
    openSizeGuideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sizeModal.classList.add('is-active');
    });
  }

  if (sizeModalClose) {
    sizeModalClose.addEventListener('click', () => {
      sizeModal.classList.remove('is-active');
    });
  }

  sizeModal.addEventListener('click', (e) => {
    if (e.target === sizeModal) sizeModal.classList.remove('is-active');
  });

  /* ─── 8. ONLINE E-CATALOGUE PDF VIEWER MODAL ────────────────── */
  const pdfModal = document.getElementById('pdf-viewer-modal');
  const pdfModalClose = document.getElementById('modal-pdf-close');
  const pdfIframe = document.getElementById('pdf-iframe');
  const headerCatBtn = document.getElementById('open-catalogue-modal-header');
  const heroCatBtn = document.getElementById('hero-view-catalogue-btn');
  const readOnlinePdfBtn = document.getElementById('btn-read-online-pdf');

  const PDF_URL = '2023-12-28_Catalogue%20%C4%91%E1%BB%93ng%20ph%E1%BB%A5c_1.pdf';

  const openPdfViewer = () => {
    if (pdfIframe && !pdfIframe.src.includes('Catalogue')) {
      pdfIframe.src = PDF_URL;
    }
    pdfModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closePdfViewer = () => {
    pdfModal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (headerCatBtn) headerCatBtn.addEventListener('click', openPdfViewer);
  if (heroCatBtn) heroCatBtn.addEventListener('click', openPdfViewer);
  if (readOnlinePdfBtn) readOnlinePdfBtn.addEventListener('click', openPdfViewer);
  if (pdfModalClose) pdfModalClose.addEventListener('click', closePdfViewer);

  pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) closePdfViewer();
  });

  // Global ESC key to close any modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductDetail();
      if (sizeModal) sizeModal.classList.remove('is-active');
      closePdfViewer();
    }
  });

  /* ─── 9. COUNTDOWN TIMER ────────────────────────────────────── */
  const countdownTimer = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    endDate.setHours(23, 59, 59, 0);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (!daysEl) return;

    const update = () => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const pad = (n) => String(n).padStart(2, '0');

      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minutesEl.textContent = pad(minutes);
      secondsEl.textContent = pad(seconds);
    };

    update();
    setInterval(update, 1000);
  };

  countdownTimer();

  /* ─── 10. COUNTER ANIMATION ─────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const duration = 2000;
          const startTime = performance.now();

          const easeOutQuad = (t) => t * (2 - t);

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            const currentValue = Math.floor(easedProgress * target);
            el.textContent = currentValue.toLocaleString('vi-VN');

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target.toLocaleString('vi-VN');
            }
          };

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach(el => counterObserver.observe(el));

  /* ─── 11. SCROLL REVEAL ANIMATIONS ──────────────────────────── */
  const animatedElements = document.querySelectorAll('[data-animate]');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, parseInt(delay));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
  );

  animatedElements.forEach(el => revealObserver.observe(el));

  /* ─── 12. FILE UPLOAD LOGIC ─────────────────────────────────── */
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('logo-upload');
  const uploadPlaceholder = document.getElementById('upload-placeholder');
  const uploadPreview = document.getElementById('upload-preview');
  const previewImage = document.getElementById('preview-image');
  const uploadRemove = document.getElementById('upload-remove');

  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.style.borderColor = 'var(--clr-accent)';
      uploadArea.style.background = 'rgba(200,164,94,0.1)';
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.style.borderColor = '';
      uploadArea.style.background = '';
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.style.borderColor = '';
      uploadArea.style.background = '';
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files[0]) handleFile(fileInput.files[0]);
    });

    const handleFile = (file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImage.src = e.target.result;
          uploadPlaceholder.style.display = 'none';
          uploadPreview.style.display = 'flex';
        };
        reader.readAsDataURL(file);
      } else {
        uploadPlaceholder.innerHTML = `<p>Đã chọn file: <strong>${file.name}</strong></p>`;
      }
    };

    if (uploadRemove) {
      uploadRemove.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        previewImage.src = '';
        uploadPlaceholder.style.display = 'flex';
        uploadPreview.style.display = 'none';
      });
    }
  }

  /* ─── 13. FORM SUBMISSION ───────────────────────────────────── */
  const form = document.getElementById('b2b-consultation-form');
  const submitBtn = document.getElementById('submit-btn');

  if (form && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalContent = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Đang truyền dữ liệu lên hệ thống HDC UniPortal...</span>';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.8';

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ ĐÃ TIẾP NHẬN THÀNH CÔNG!</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';

        alert('Cảm ơn Quý khách! Chuyên viên B2B của HDC Fashion sẽ liên hệ lại qua số điện thoại và gửi bảng mẫu vải thực tế trong vòng 15 phút.');

        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
          submitBtn.style.background = '';
          form.reset();
          if (uploadPlaceholder) uploadPlaceholder.style.display = 'flex';
          if (uploadPreview) uploadPreview.style.display = 'none';
        }, 3000);
      }, 1200);
    });
  }

  /* ─── 14. WISHLIST TOGGLE ───────────────────────────────────── */
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const svgPath = btn.querySelector('svg path');
      const isActive = btn.classList.toggle('is-active');
      if (isActive) {
        svgPath.setAttribute('fill', '#ef4444');
        svgPath.setAttribute('stroke', '#ef4444');
        btn.style.background = 'rgba(239,68,68,0.15)';
      } else {
        svgPath.setAttribute('fill', 'none');
        svgPath.setAttribute('stroke', 'currentColor');
        btn.style.background = '';
      }
    });
  });

  /* ─── 15. SMOOTH SCROLL FOR ALL ANCHORS ─────────────────────── */
  document.querySelectorAll('a[href^="#"]:not([data-tab-nav])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
