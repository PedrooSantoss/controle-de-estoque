const products = [
    { id: 1, name: 'Iphone 16', quantity: 10, price: 5000, image: 'https://api.store.vivo.com.br/medias/515Wx515H-DGAP2392-1-.jpg?context=bWFzdGVyfHByb2R1Y3RpbWFnZXN8MTQ3MDl8aW1hZ2UvanBlZ3xhRGN3TDJneVppODVNakkwTWprMk16QXdOVGMwTHpVeE5WZDROVEUxU0Y5RVIwRlFNak01TWw4Z0tERXBMbXB3Wnd8N2U1YTc3NjNhN2MyNjhlNzg1YjU3MmJlOTBlOGFkZWIyZWU3ZDMwYjNlODBhYzY0YjhiYjhiMTM5ZjJhYzdmYw' },
    { id: 2, name: 'Iphone 16 Plus', quantity: 5, price: 6000, image: 'https://imgs.casasbahia.com.br/55067453/1g.jpg' },
    { id: 3, name: 'Iphone 16 Pro', quantity: 8, price: 7500, image: 'https://a-static.mlcdn.com.br/1500x1500/iphone-16-pro-apple-1tb-camera-tripla-de-48mp-tela-63-titanio-branco/kabum/634672/a534c346a7364da0d2205d6c0cfd58d9.jpeg' },
    { id: 4, name: 'Iphone 16 Pro Max', quantity: 3, price: 13000, image: 'https://m.media-amazon.com/images/I/51WHMPAJEKL.jpg' },
    { id: 5, name: 'Poco x6 pro 5g', quantity: 7, price: 4000, image: 'https://mastertek.bwimg.com.br/mastertek/produtos/xiaomi-poco-x6-pro-5g-256gb---8gb-ram-1708107788.9872.jpeg' },
    { id: 6, name: 'Galaxy S23 Ultra', quantity: 10, price: 8500, image: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s23-ultra-512gb-verde-5g-12gb-ram-68-cam-quadrupla-selfie-12mp/magazineluiza/232855600/f059910266c4cdc1121ddd1c5a42c88a.jpg' },
    { id: 7, name: 'Galaxy Z Flip 5', quantity: 12, price: 7000, image: 'https://matheuskise.com/wp-content/uploads/2024/08/Galaxy-Z-Flip5.png' },
    { id: 8, name: 'Motorola Edge 40', quantity: 6, price: 4500, image: 'https://imgs.casasbahia.com.br/55065771/1g.jpg' },
    { id: 9, name: 'Xiaomi Redmi Note 12', quantity: 15, price: 2000, image: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-limeufssl3lr18' },
    { id: 10, name: 'Realme GT 3', quantity: 8, price: 5500, image: 'https://horizonplay.fbitsstatic.net/img/p/smartphone-realme-gt3-5g-1tb-16ram-pulse-white-branco-versao-global-151126/337720.jpg?w=670&h=670&v=no-value' },
    { id: 11, name: 'Google Pixel 7 Pro', quantity: 4, price: 8000, image: 'https://images.tcdn.com.br/img/img_prod/625110/google_pixel_7_pro_128gb_snow_2022_4151_2_a6b17a265e26c9c6c7046c44fede4d3a.jpg' },
    { id: 12, name: 'Sony Xperia 1 V', quantity: 3, price: 9500, image: 'https://images.tcdn.com.br/img/img_prod/625110/sony_xperia_1_v_256gb_12gb_ram_oled_48mp_silver_6325_1_ec6d6691e7b2fa167d97be709cf683c3.jpg' },
    { id: 13, name: 'OnePlus 11', quantity: 7, price: 5000, image: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/oneplus-11-and-oneplus-buds-pro-2-in-green.jpg' },
    { id: 14, name: 'Galaxy A54 5G', quantity: 20, price: 3000, image: 'https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v7076565554291302981/products/0100131944420003.5b3125a811ef6e54c56d9712d565d519358c2452.jpg&height=475&width=475' },
    { id: 15, name: 'Oppo Find X6 Pro', quantity: 5, price: 7500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGka0qAHoatSitoglJbTNisrOF4sQ85yU_ew&s' },
    { id: 16, name: 'Huawei P60 Pro', quantity: 4, price: 7800, image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/504719/Smartphone-Huawei-P60-Pro-512GB-12GB-RAM-C-mera-de-48MP-Tela-de-6-67-Polegadas-Black_1700606893_gg.jpg' },
    { id: 17, name: 'Asus ROG Phone 7', quantity: 3, price: 9000, image: 'https://dcdn.mitiendanube.com/stores/003/772/365/products/327b13c78fdb5da9829c03a83abc9c5cawsaccesskeyidakiatclmsgfx4j7tu445expires1728574095signaturettbckwbq62zlcmrlg4torn7g16s3d-062998f6250459607216970381080936-1024-1024.jpg' },
    { id: 18, name: 'Infinix Zero Ultra', quantity: 15, price: 3000, image: 'https://www.finetmobile.com/wp-content/uploads/2023/04/1-42.jpg' },
    { id: 19, name: 'Vivo X90 Pro+', quantity: 2, price: 10000, image: 'https://www.dxomark.com/wp-content/uploads/medias/post-137989/Vivo-X90-Pro-Plus_featured-image-packshot-review-1.jpg' },
    { id: 20, name: 'iPhone 14 Pro Max', quantity: 8, price: 11000, image: 'https://horizonplay.fbitsstatic.net/img/p/apple-iphone-14-pro-max-128gb-5g-vitrine-tela-super-retina-xdr-oled-6-7-cor-preto-espacial-150457/337049-2.jpg?w=670&h=670&v=no-value' },
    { id: 21, name: 'Samsung Galaxy M14', quantity: 18, price: 1500, image: 'https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m14-5g-128gb-4gb-ram-tela-infinita-de-6-6-dual-chip/samsung/4370/53613bdf9092b2de9255db35cf18a851.jpeg' },
    { id: 22, name: 'Lenovo Legion Phone', quantity: 2, price: 9500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxQ_M3tEIrYE6DXJZ1Oom0_4gezCST6eNt52s1ukND0PmchA3dFZ_tBr20YGeRIbKSoM&usqp=CAU' },
    { id: 23, name: 'Xiaomi Black Shark 5', quantity: 9, price: 4200, image: 'https://www.oficinadanet.com.br/imagens/obj_item/1203/black-shark-5-pro.jpg' },
    { id: 24, name: 'Samsung Galaxy A14', quantity: 22, price: 1800, image: 'https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v749063842645228851/products/0100131943870972.055bdbd2413ab62c55b98f52efd6b2eaac7a137d.jpg&height=475&width=475' },
    { id: 25, name: 'Realme Narzo 60', quantity: 12, price: 3200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTMbckZQUYCQ80ToTDRz9uJDSChrWFD7vLA&s' },
    { id: 27, name: 'Asus Zenfone 10', quantity: 4, price: 6000, image: 'https://www.mundoconectado.com.br/wp-content/uploads/2023/07/zenfone-10.jpg' },
    { id: 28, name: 'Google Pixel Fold', quantity: 2, price: 13000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQQJ5J8ZerYJsEOekot9bH7eOcR7ih2bDjQ&s' },
    { id: 29, name: 'Motorola Razr 40', quantity: 6, price: 8000, image: 'https://cdn.avaliado.com.br/media/p/smartphone-motorola-razr-40-5g-256gb-8gb-ram-camera-dupla-64mp-13mp_JDWQBB6.jpg' },
    { id: 30, name: 'Nothing Phone 2', quantity: 12, price: 4200, image: 'https://cdn.phonemore.com/content/2023/jpg/21067.jpg' },
    { id: 31, name: 'Vivo V27 Pro', quantity: 8, price: 3700, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxAQXJKcJvnxcYkPMo33m1IEGNQp4aTt8XA&s' },
    { id: 32, name: 'Redmi K60 Ultra', quantity: 7, price: 4800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfQzjchSpqtKkoAu8jCRQxAo13gxiXO1x0w&s' },
    { id: 33, name: 'Oppo Reno 10', quantity: 10, price: 3500, image: 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750304594298l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { id: 34, name: 'Samsung Galaxy Fold 5', quantity: 3, price: 12000, image: 'https://images.samsung.com/br/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-kv-a.jpg?imbypass=true' },
];


export default products;