/* ═══════════════════════════════════════════
   MUSEO DA VINCI — Artwork Data
   ═══════════════════════════════════════════ */

const artworks = [
  {
    title: "Mona Lisa",
    year: "c. 1503–1519",
    location: "Louvre Museum, Paris",
    medium: "Oil on poplar panel, 77 × 53 cm",
    description: "The most celebrated portrait in history, depicting Lisa Gherardini, wife of Florentine merchant Francesco del Giocondo. Da Vinci's mastery of sfumato—a technique of blending tones to create atmospheric haze—gives the subject her enigmatic, almost living expression. The landscape behind her recedes into misty blue distances, placing her outside of time itself.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    color: "#6b4f2a"
  },
  {
    title: "The Last Supper",
    year: "c. 1495–1498",
    location: "Santa Maria delle Grazie, Milan",
    medium: "Tempera, gesso, and pitch on plaster, 460 × 880 cm",
    description: "Commissioned by Ludovico Sforza, this mural captures the moment Christ announces his betrayal at the Passover supper. Each of the twelve apostles reacts with distinct psychological intensity—shock, denial, grief—arranged in four groups of three. The composition's perfect perspective draws the eye inevitably to the solitary, serene figure of Christ at center.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%22The_Last_Supper%22_by_Leonardo_da_Vinci.jpg",
    color: "#7a6030"
  },
  {
    title: "Vitruvian Man",
    year: "c. 1490",
    location: "Gallerie dell'Accademia, Venice",
    medium: "Pen and ink on paper, 34.4 × 24.5 cm",
    description: "This iconic drawing unites art and science in a single image. Based on the writings of the Roman architect Vitruvius, it depicts the ideal human body inscribed in both circle and square—the two perfect geometric forms. More than a study of proportion, it represents Leonardo's belief in the harmony between man, geometry, and the cosmos.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg",
    color: "#9e8a5e"
  },
  {
    title: "Lady with an Ermine",
    year: "c. 1489–1490",
    location: "Czartoryski Museum, Kraków",
    medium: "Oil on walnut panel, 54 × 39 cm",
    description: "Believed to portray Cecilia Gallerani, mistress of Ludovico Sforza, this painting is remarkable for its psychological immediacy. The sitter turns as though reacting to something just out of frame, her gaze alive with intelligence. The white ermine she holds may symbolize purity or function as a visual pun on her patron's heraldic emblem.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_National_Museum_Krak%C3%B3w.jpg",
    color: "#3a3028"
  },
  {
    title: "The Virgin of the Rocks",
    year: "c. 1483–1486",
    location: "Louvre Museum, Paris",
    medium: "Oil on panel, 199 × 122 cm",
    description: "In a shadowy grotto of rock and water, the Virgin Mary, the infant Saint John, the Christ Child, and an angel are arranged in a pyramidal composition of extraordinary grace. The mysterious, cavelike setting heightens the sacred and otherworldly atmosphere. Every leaf and stone is rendered with the precision of scientific observation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg",
    color: "#2a3828"
  },
  {
    title: "La Scapigliata",
    year: "c. 1500–1508",
    location: "Galleria Nazionale, Parma",
    medium: "Umber, lead white, and greenish earth on poplar, 24.7 × 21 cm",
    description: "This delicate, unfinished study—known as the Disheveled One for her loosely flowing hair—is one of the most tender works in the da Vinci canon. Her downcast gaze and softly parted lips suggest an inner life of profound quietude. The work's unfinished state paradoxically adds to its emotional power.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Leonardo_da_Vinci_-_Head_of_a_Woman_-_WGA12621.jpg",
    color: "#5c4a2a"
  },
  {
    title: "Salvator Mundi",
    year: "c. 1499–1510",
    location: "Private Collection",
    medium: "Oil on walnut panel, 65.6 × 45.4 cm",
    description: "Depicting Christ as Savior of the World, this painting was lost for centuries before its rediscovery. Christ raises his right hand in blessing while his left holds a crystal orb. The translucent sphere, painted with astonishing optical accuracy, defies the laws of refraction in ways still debated by scholars.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Salvator_Mundi%2C_Leonardo_da_Vinci%2C_c.1500.jpg",
    color: "#2a2838"
  },
  {
    title: "Ginevra de' Benci",
    year: "c. 1474–1478",
    location: "National Gallery of Art, Washington D.C.",
    medium: "Oil on panel, 38.8 × 36.7 cm",
    description: "This portrait of the Florentine noblewoman Ginevra de' Benci is the only Leonardo painting in the Americas. The young woman's cool, reserved gaze suggests intelligence and self-possession. Behind her, a juniper bush frames her pale face with dark, spiky foliage.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",
    color: "#304028"
  },
  {
    title: "Saint John the Baptist",
    year: "c. 1513–1516",
    location: "Louvre Museum, Paris",
    medium: "Oil on walnut panel, 69 × 57 cm",
    description: "Da Vinci's final known painting depicts Saint John emerging from a dark, indefinite background, pointing heavenward with a languid, ambiguous gesture. The figure—androgynous, smiling cryptically, bathed in sfumato—has puzzled viewers for five centuries.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Leonardo_da_Vinci_-_Saint_John_the_Baptist_c_1513-1516.jpg",
    color: "#1a1510"
  },
  {
    title: "The Annunciation",
    year: "c. 1472–1476",
    location: "Uffizi Gallery, Florence",
    medium: "Oil and tempera on panel, 98 × 217 cm",
    description: "One of Leonardo's earliest works, this Annunciation captures the Archangel Gabriel delivering his divine message to the Virgin Mary. The distant landscape dissolves into aerial perspective years before the technique had a name.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Leonardo_da_Vinci_-_Annunciazione.jpg",
    color: "#3a5030"
  },
  {
    title: "Portrait of a Musician",
    year: "c. 1483–1487",
    location: "Pinacoteca Ambrosiana, Milan",
    medium: "Oil on walnut panel, 44.7 × 32 cm",
    description: "Believed to be the only male portrait Leonardo ever painted, the subject holds a sheet of music with firm confidence. The musician's gaze conveys focused intelligence and creative inner life.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Leonardo_da_Vinci_-_Portrait_of_a_Musician_-_Pinacoteca_Ambrosiana_Milan.jpg",
    color: "#28201a"
  },
  {
    title: "Study of Hands",
    year: "c. 1474",
    location: "Royal Collection, Windsor Castle",
    medium: "Silverpoint on pale pink prepared paper, 21.5 × 15 cm",
    description: "This silvery study of two hands—rendered with breathtaking delicacy in metalpoint—was likely a preparatory drawing for the portrait of Ginevra de' Benci. Every tendon, joint, and knuckle is observed with clinical precision, yet the hands seem poised to move.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Leonardo_da_Vinci_-_Study_of_hands.jpg",
    color: "#8a7a60"
  }
];
