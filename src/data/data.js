
const categorias = [
  { "codigo": 1, "desc": "Velas Aromaticas" },
  { "codigo": 2, "desc": "Bombas de limpieza" },
  { "codigo": 3, "desc": "Inciensos" },
  { "codigo": 4, "desc": "Aceites" }
];
const productos =
  [
    { "codigo": 1, "categoria": 1, "descripcionLarga": "Las velas de miel o velas de cera de abeja además de su belleza y valor terapéutico son muy utilizadas para rituales espirituales ya que son capaces de mover energías positivas para atraer el amor, la bondad y la abundancia.", "descripcionCorta": "Miel", "precio": 150, "img": "velasMiel.jpg" },
    { "codigo": 2, "categoria": 1, "descripcionLarga": "Las Velas de Lavanda se utilizan para reducir el estrés y la ansiedad, disminuir la tensión arterial y facilitar el sueño. Es por ello una activo muy habitual en aromaterapia.", "descripcionCorta": "Lavanda", "precio": 150, "img": "velas.jpg" },
    { "codigo": 3, "categoria": 1, "descripcionLarga": "Las terapias aromáticas de frutos y hierbas son utilizadas desde hace muchos años para tratar no solo a nivel energético sino también enfermedades.", "descripcionCorta": "Frutos y Hierbas", "precio": 150, "img": "velas.jpg" },
    { "codigo": 4, "categoria": 1, "descripcionLarga": "La citronela es una planta aromática cuyo uso más conocido es el de repelente de mosquitos, debido a su intenso aroma cítrico. Sin embargo, en zonas como India o Sri Lanka, esta planta y su aceite esencial se utilizan como un ingrediente terapéutico para su consumo o uso tópico.", "descripcionCorta": "Citronela", "precio": 150, "img": "velas.jpg" },
    { "codigo": 5, "categoria": 1, "descripcionLarga": "El aroma de Rosa es floral, dulce y penetrante. Es conocido por todos, despierta los sentidos, la sensualidad y es uno de los aromas que más se recomienda para tratar estados de stress y de decaimiento emocional. La fragancia de rosa levanta el ánimo, por lo que se recomienda para tratar el estrés y la apatía.", "descripcionCorta": "Rosas", "precio": 150, "img": "velas.jpg" },
    { "codigo": 6, "categoria": 2, "descripcionLarga": "Las Bombas de limpieza de miel de cera de abeja además de su belleza y valor terapéutico son muy utilizadas para rituales espirituales ya que son capaces de mover energías positivas para atraer el amor, la bondad y la abundancia.", "descripcionCorta": "Miel 8 Pack", "precio": 230, "img": "bombaActivadaX8.jpg" },
    { "codigo": 7, "categoria": 2, "descripcionLarga": "Las Bombas de limpieza de Lavanda se utilizan para reducir el estrés y la ansiedad de todo tu hogar, o el espacio donde eligas encenderlas, disminuir la tensión arterial y facilitar el sueño. Es por ello una activo muy habitual en aromaterapia.", "descripcionCorta": "Lavanda 8 Pack", "precio": 230, "img": "bombaActivadaX8.jpg" },
    { "codigo": 8, "categoria": 2, "descripcionLarga": "Las terapias aromáticas de frutos y hierbas son utilizadas desde hace muchos años para tratar no solo a nivel energético sino también enfermedades.", "descripcionCorta": "Frutos y Hierbas 8 Pack", "precio": 230, "img": "bombaActivadaX8.jpg" },
    { "codigo": 9, "categoria": 2, "descripcionLarga": "La citronela es una planta aromática cuyo uso más conocido es el de repelente de mosquitos, debido a su intenso aroma cítrico. Sin embargo, en zonas como India o Sri Lanka, esta planta y su aceite esencial se utilizan como un ingrediente terapéutico para su consumo o uso tópico.", "descripcionCorta": "Citronela 8 Pack", "precio": 230, "img": "bombaActivadaX8.jpg" },
    { "codigo": 10, "categoria": 2, "descripcionLarga": "El aroma de Rosa es floral, dulce y penetrante. Es conocido por todos, despierta los sentidos, la sensualidad y es uno de los aromas que más se recomienda para tratar estados de stress y de decaimiento emocional. La fragancia de rosa levanta el ánimo, por lo que se recomienda para tratar el estrés y la apatía.", "descripcionCorta": "Rosas 8 Pack", "precio": 230, "img": "bombaActivadaX8.jpg" },
    { "codigo": 11, "categoria": 2, "descripcionLarga": "Las Bombas de limpieza de miel de cera de abeja además de su belleza y valor terapéutico son muy utilizadas para rituales espirituales ya que son capaces de mover energías positivas para atraer el amor, la bondad y la abundancia.", "descripcionCorta": "Miel 4 Pack", "precio": 230, "img": "bombaActivadaX4.jpg" },
    { "codigo": 12, "categoria": 2, "descripcionLarga": "Las Bombas de limpieza de Lavanda se utilizan para reducir el estrés y la ansiedad de todo tu hogar, o el espacio donde eligas encenderlas, disminuir la tensión arterial y facilitar el sueño. Es por ello una activo muy habitual en aromaterapia.", "descripcionCorta": "Lavanda 4 Pack", "precio": 230, "img": "bombaActivadaX4.jpg" },
    { "codigo": 13, "categoria": 2, "descripcionLarga": "Las terapias aromáticas de frutos y hierbas son utilizadas desde hace muchos años para tratar no solo a nivel energético sino también enfermedades.", "descripcionCorta": "Frutos y Hierbas 4 Pack", "precio": 230, "img": "bombaActivadaX4.jpg" },
    { "codigo": 14, "categoria": 2, "descripcionLarga": "La citronela es una planta aromática cuyo uso más conocido es el de repelente de mosquitos, debido a su intenso aroma cítrico. Sin embargo, en zonas como India o Sri Lanka, esta planta y su aceite esencial se utilizan como un ingrediente terapéutico para su consumo o uso tópico.", "descripcionCorta": "Citronela 4 Pack", "precio": 230, "img": "bombaActivadaX4.jpg" },
    { "codigo": 15, "categoria": 2, "descripcionLarga": "El aroma de Rosa es floral, dulce y penetrante. Es conocido por todos, despierta los sentidos, la sensualidad y es uno de los aromas que más se recomienda para tratar estados de stress y de decaimiento emocional. La fragancia de rosa levanta el ánimo, por lo que se recomienda para tratar el estrés y la apatía.", "descripcionCorta": "Rosas 4 Pack", "precio": 230, "img": "bombaActivadaX4.jpg" },
    { "codigo": 16, "categoria": 3, "descripcionLarga": "Los Inciensos de miel además de su belleza y valor terapéutico son muy utilizadas para rituales espirituales ya que son capaces de mover energías positivas para atraer el amor, la bondad y la abundancia.", "descripcionCorta": "Miel", "precio": 190, "img": "inciensoTubo.jpg" },
    { "codigo": 17, "categoria": 3, "descripcionLarga": "Los Inciensos de Lavanda se utilizan para reducir el estrés y la ansiedad, disminuir la tensión arterial y facilitar el sueño. Es por ello una activo muy habitual en aromaterapia.", "descripcionCorta": "Lavanda", "precio": 190, "img": "inciensoTubo.jpg" },
    { "codigo": 18, "categoria": 3, "descripcionLarga": "Las terapias aromáticas de frutos y hierbas son utilizadas desde hace muchos años para tratar no solo a nivel energético sino también enfermedades.", "descripcionCorta": "Frutos y Hierbas", "precio": 190, "img": "inciensoTubo.jpg" },
    { "codigo": 19, "categoria": 3, "descripcionLarga": "La citronela es una planta aromática cuyo uso más conocido es el de repelente de mosquitos, debido a su intenso aroma cítrico. Sin embargo, en zonas como India o Sri Lanka, esta planta y su aceite esencial se utilizan como un ingrediente terapéutico para su consumo o uso tópico.", "descripcionCorta": "Citronela", "precio": 190, "img": "inciensoTubo.jpg" },
    { "codigo": 20, "categoria": 3, "descripcionLarga": "El aroma de Rosa es floral, dulce y penetrante. Es conocido por todos, despierta los sentidos, la sensualidad y es uno de los aromas que más se recomienda para tratar estados de stress y de decaimiento emocional. La fragancia de rosa levanta el ánimo, por lo que se recomienda para tratar el estrés y la apatía.", "descripcionCorta": "Rosas", "precio": 190, "img": "inciensoTubo.jpg" },
    { "codigo": 21, "categoria": 4, "descripcionLarga": "Los Aceites de miel brindan un valor terapéutico son muy utilizadas para masajes relajantes ya que son capaces de mover energías positivas para atraer el amor, la bondad y la abundancia.", "descripcionCorta": "Miel", "precio": 150, "img": "aceite.jpg" },
    { "codigo": 22, "categoria": 4, "descripcionLarga": "Los Aceites de Lavanda se utilizan para reducir el estrés y la ansiedad, disminuir la tensión arterial y facilitar el sueño. Son muy utilizados tanto para aromaterapia como para masajes relajantes.", "descripcionCorta": "Lavanda", "precio": 150, "img": "aceite.jpg" },
    { "codigo": 23, "categoria": 4, "descripcionLarga": "Las terapias aromáticas de frutos y hierbas son utilizadas desde hace muchos años para tratar no solo a nivel energético sino también enfermedades.", "descripcionCorta": "Frutos y Hierbas", "precio": 150, "img": "aceite.jpg" },
    { "codigo": 24, "categoria": 4, "descripcionLarga": "La citronela es una planta aromática cuyo uso más conocido es el de repelente de mosquitos, debido a su intenso aroma cítrico. Sin embargo, en zonas como India o Sri Lanka, esta planta y su aceite esencial se utilizan como un ingrediente terapéutico para su consumo o uso tópico.", "descripcionCorta": "Citronela", "precio": 150, "img": "aceite.jpg" },
    { "codigo": 25, "categoria": 4, "descripcionLarga": "El aroma de Rosa es floral, dulce y penetrante. Es conocido por todos, despierta los sentidos, la sensualidad y es uno de los aromas que más se recomienda para tratar estados de stress y de decaimiento emocional. La fragancia de rosa levanta el ánimo, por lo que se recomienda para tratar el estrés y la apatía.", "descripcionCorta": "Rosas", "precio": 150, "img": "aceite.jpg" }
  ]

  export {categorias, productos}