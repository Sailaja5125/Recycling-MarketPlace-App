// categories : gifts , decoratives , toys , accessories , essentials
const items = [
  {
    id: 1001,
    name: "Recycled Newspaper Bowls ",
    category: "Gift",
    price: 200,
    about: "Made of Paper",
    image:"https://i.etsystatic.com/19887624/r/il/70e6d0/2022652057/il_fullxfull.2022652057_qctg.jpg"
  },
  {
    id: 1002,
    name: "Eco Moose",
    category: "Gift",
    price: 300,
    about: "Made from Recycled Materials",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSrJoAFgMTGKUMv6KWrM0ObPhf3blYxBUmm8bv8BSOqzwN0COE2xRz9OwjqeRHYdnaVG9vpSWPvrfVa1ah4T-Uk-Sr8EZauqgKPqfoLWj_uJ2EztKNbLWb"
  },
  {
    id: 1003,
    name: "Infinity Upcycled Diary",
    category: "Gift",
    price: 350,
    about: "366 pages diary",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsmrqW7bBS26ICqpjyKKH3lNCR3oL-WZ9LQottKAtELUmse0zx5nAzd661IWd7x5Z0K-K7WmGsO2Rz2A9bgD5nsY3EySBySjJ-BngXJnRC858gs28nwglf99k"
  },
  {
    id: 1004,
    name: "Bamboo Haat",
    category: "Gift",
    price: 230,
    about: "Eco-Friendly - No new materials are required in manufacturing these pens, as we are reusing waste papers and protecting the environment. The paper is completely bio-degradable, so no pollution problem.",
    image:"https://m.media-amazon.com/images/I/51DVGa-5xkL._SX466_.jpg"
  },
  {
    id: 1005,
    name: "Beautiful Upcycled Flowers",
    category: " Mother's Day/Birthday/Housewarming Gift. Recycled Plastic & Wire.",
    price: 100,
    about: "",
    image:"https://i.etsystatic.com/13811573/r/il/78ec13/1861222059/il_fullxfull.1861222059_2scb.jpg"
  },
  {
    id: 1006,
    name: "Recycled Newspaper Pen Holder",
    category: "Gift",
    price: 500,
    about: "Eco Christmas Gift for Son Colorful Recycled Newspaper Pen Holder Pencil Holder with a Matching Coaster Desk",
    image:"https://i.etsystatic.com/24002200/r/il/dec624/2863164559/il_fullxfull.2863164559_3vsu.jpg"
  },
   {
    id: 1007,
    name: "Handmade Elephant decorative",
    category: "Decoratives",
    price: 500,
    about: "Eco-Friendly Design: Handcrafted from recycled materials, this set of 5 promotes sustainability and eco-conscious living. Charming Elephant Motif",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtlrO1sc4egJZflqvDr-bxPwv8eX443IyXeFa8B4Til2uJByAGoaT_ude5M67WG06yNH1XOdK-KrcE9YPhEGlg64PsBrzFIFk_xbEGU6k&usqp=CAE"
  },
  {
    id: 1008,
    name: "Upcycled Fabric Diya & Elephant Festive Hangings - Diya",
    category: "Decoratives",
    price: 400,
    about: "This product has been skillfully crafted through the process of upcycling textile waste collected from factories and boutiques.",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcp3e0VfFPGrsUWqu01XKcXMuw1J4nM4rsDeKCemd1PlyQ0gnjgniJQ-mwt8pLAn2_246aReW0YjRG1EKna3hrT66kb2aTNkvRPtJ_Z0U&usqp=CAE"
  },
  {
    id: 1009,
    name: "Recycled Owl Chime",
    category: "Decoratives",
    price: 100,
    about: "Made from recycled iron, this clever owl has blue-glass eyes and perches on a brass branch, ornamented with colorful glass beads and small iron bells that produce a cheery voice",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwnoUfgO6JcSvf7oBLIJJ1k8v7lRXGEuDErJwtrmnZPZkK8QlTpjyYGeIYlK3i5gxzLHupU3wUmV8NODMS2sZR_Wzf0ezIQp-xYPAfmLDmw89aNLF0PQDa&usqp=CAE"
  },
  {
    id: 1010,
    name: "Handmade Upcycled Coiled Newspaper Ornaments For Christmas",
    category: "Decoratives",
    price: 200,
    about: "Product Description These upcycled ornaments are sure to bring merriment and cheer to your home this Christmas! Handcrafted by women, the ornaments are made using coiled newspaper.",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPHL4VO5a5-dbdFSGrX2TqQMD8s5ES_KI1LL47IC_ISvHyE854hAsqwRWr1Ry-GLusdxWu1lkRIWP-nRbiArIxLM7U4Lcfbw&usqp=CAE"
  },
   {
    id: 1011,
    name: "Handcrafted Recycled Material Peacock Rajasthani Door",
    category: "Decoratives",
    price: 360,
    about: "Presents Decorative Wall/door Hanging Bells Which Is Widely Used In Worldwide To Hang Across Door, Wall, Window , Living Room And Balcony, Room Decorations Items For Bedroom",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWMl1otZZfNgLolKvpAV4wLT7Ny2081W3MCMGX89r9v-7vq33S7FhM0GfuSR2b0DwL5jBWM13APUi9Na8DszCX0WtlQSf-FMJlywA8jVeZ&usqp=CAE"
  },
   {
    id: 1012,
    name: "Heart Decorative Items",
    category: "Decoratives",
    price: 470,
    about: "Made of recycled materials",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHMLcGWy5OH5vbviBHiLeul_iM7c0TPWtKsTIzbebT7WOQCywuyy9ATczY27Y8rerbPKCIAHzuow8LPs_MvKWohOj5399RCAx-ZoGNk-d5BfsZpOdQRjdviw&usqp=CAE"
  },
   {
    id: 1013,
    name: "Cocomelon Eco Soft Toy,",
    category: "Toys",
    price: 700,
    about: "The Eco range of soft cuddly toys are excellent quality and made with 100% recycled materials. Fashioned for young Cocomelon fans whilst staying true to the classic Cocomelon",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSelxnUA8OxEMeEmqjrGLPmJTt2MGeukEEYqe-BUpdt1mdAvkOhw4MHK1lBPkXWmosSDxLw71epCo2DrzAx_f_9rQqwdskLmcclCzmdDmkR&usqp=CAE"
  },
   {
    id: 1014,
    name: "Aurora Eco-Friendly Eco Nation Pig Stuffed Animal",
    category: "Toys",
    price: 1000,
    about: "Eco Nation Pig Discover joy with a purpose through the Eco Nation plush collection! Crafted from recycled materials, each huggable companion's fabric is made from plastic",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQX9S1_J0oOHgUz3nz0BQpVlOuEXZGZjYIRMIRPvEBcqoviLrHba3CLm2uxwbkFbHCiGwU2BEpVWnCb3a-ou4jlP1vpRK8GXDBpu7XlanWxLIXzBCU_qDHPpQ&usqp=CAE"
  },
  {
    id: 1015,
    name: "Eco friendly wooden car and Push Pull Toys for kids",
    category: "Toys",
    price: 2400,
    about: "Hear-winning wooden toys and games for kids by Channapatna Toys with Eco-friendly raw materials, wooden gifts, wooden home decor and culinary ware, wooden lifestyle and wooden",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNuWYHxwPlAY3ktyJx1EmKJRmxfrDibLRVUhAYR29pplBTQ3j2HCmzp9bvY9GIigt1dreO7Hty9Z9ZHclXiru4Woaj_7X0G25aB_pJrxlkUlQdVyksBbT4mRD9&usqp=CAE"
  },
  {
    id: 1016,
    name: "Eco Basket Ecobasket Hand Made Wooden Truck For Learning",
    category: "Toys",
    price: 2000,
    about: "Introducing Our Exquisitely Crafted Handmade Wooden Toys, A Captivating Blend Of Artistry And Entertainment. Each Piece Is Meticulously Hand-cut From High-quality Wood",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRISs879WmXiLumBhssnbN_iozVPWR6Da-3pgPqdfVh4zPfw8q3vAuTStlPlpV6RwHng5nRn_LwHKTiUXnC7jAysoiqu5n7l8SJccZ3s5Rwfd2ONSM7HsfJrDc&usqp=CAE"
  },
   {
    id: 1017,
    name: "Sustainable Neem Wood Pull Along Horse",
    category: "Toys",
    price: 1200,
    about: "Encourage active play and imaginative adventures with our neem wooden pull-along horse toy! Made from sustainable neem wood, this adorable toy features rolling wheels",
    images: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaUHUouFtT8aMMMdcxZM79nX-8xbokrfsRrDIQwSdFp0ft9XpGuURKd6ZS9h5dCw_pOAd5rkjbnsakBb4gJdNNMBbpkIukJq8nBv2wmJgDxdomFpq_HiFY1g&usqp=CAE"
  },
   {
    id: 1018,
    name: "Green Toys Meal Maker Dough Set - Pretend Play - Toys",
    category: "Toys",
    price: 1300,
    about: "See what your kids can cook up with the Green Toys Meal Maker Dough Set. Inspire their culinary curiosity with this fun kit that has nontoxic dough made from organic flour",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSVFKgS4g9Ce7uA6r4zen9CsdNWlX9niO9PTW7fcXgQs1GZ0-taUzcUINnpQsma5YXt4zilNgHS4OdMHAki7lVA29Ar1m1HxJg4BH4fsScQv_GoZgup2dM1A&usqp=CAE"
  },
   {
    id: 1019,
    name: "Upcycled Handwoven: The Office Tote",
    category: "Accessories",
    price: 200,
    about: "The colors may vary as these products are Upcycled and Handwoven from Waste plastics bags and wrappers using Charkha (Spindle) and Handloom",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS12XAtLIQfxMxP63Ec8xCBF3zvLx2EgsZX02dkQJtetB0-neFPtifdDSw1aMKdF-5nbyTEC40Fla55f2FKT6o8upRQggE1zcjNhU7tnp8&usqp=CAE"
  },
   {
    id: 1020,
    name: "Upcycled Denim Dual Usage Tote Bag with removable insert",
    category: "Accessories",
    price: 400,
    about: "Very highly functional all-purpose tote. Stylish tote for office, travel and special occasions! Insert can be separately used on the table to organize",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4ysKAk9Igq9eE5FTJ_pz0r1dRfZjrwH_sDSUZnzjgdJWl8MO1MPqW4Lu-y8LJVkiCEdmua7qVz4tYGEvYFboppHcd8BdNCrC7TBDX5zpg0jszKZx1i7TkVw4&usqp=CAE"
  },
   {
    id: 1021,
    name: "Upcycled Pouch",
    category: "Accessories",
    price: 300,
    about: "Small pouches, travel pouches, Comes in pairs of 2. It is ideal for keeping coins, gifting small items, to keep your menstrual cup, ear pods, or ear phones. Dimension: 4.5 inch",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRU6Dk_GMoaynp8rngWCJPofh3Rw1hL7HhcWIpveMCFYFrbmAkCjz5K4-1T-KAZUiHog-Wgs-SDnk78Csfpp0eSdnuCHyrrE1hSmdK_2rP_C2Tsb-6UE0VzwA&usqp=CAE"
  },
   {
    id: 1022,
    name: "Upcycled Handwoven: Laundry Bag",
    category: "Accessories",
    price: 500,
    about: "The colors may vary as these products are Upcycled and Handwoven from Waste plastics bags and wrappers using Charkha (Spindle) and Handloom. However, the structure",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzy_FTyquyp6BIS04KCf7xiIxCVbYDCQC4z87eT-shOA6q6Jw7XvA34v-PBxMnYrlqwHW_HyvNCGmxmJ_sZgFmVFBLvR5dGZQptpyzVEjE&usqp=CAE"
  },
   {
    id: 1023,
    name: "Nature Printed Multipurpose Pouch | Upcycled Pouch",
    category: "Accessories",
    price: 100,
    about: "Embrace a blend of nature-inspired elegance and practicality with this Nature Printed Multipurpose Pouch, featuring a striking red and brown print that brings a warm, earthy",
    images: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSaegqXXdZOgt6j-aWN-F1u3H5MRv3-kaYon3yNSIe8HOv3-ZSa4TMLWantlmfw-9pCTDdjfU614eTdt8HY9HvejaSJM0FxuipGY-cykY4&usqp=CAE"
  },
   {
    id: 1024,
    name: "Upcycled Handwoven Duffle Bag",
    category: "Accessories",
    price: 1000,
    about: "40-45 less plastic bags! Be it your everyday fitness goals or a weekend getaway,reCharkha's UPCYCLED-HANDWOVEN Duffle Bag can be both! Make this bag your forever",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4jvtau2xWKrl7kU4OkarJmDINxaZbOKeOa2aFWjubL5zFWsBX0BDA-cvRBrM3a29MM2UfX6r4B7AbeT_BTkp7XOhUso7WlDPwKjBsHx_vcyZbPs2a7uLhQoU&usqp=CAE"
  },
  {
    id: 1025,
    name: "Handmade Upcycled Paper Storage Basket",
    category: "Essentials",
    price: 300,
    about: " Reduce your carbon footprint with this eco-friendly handmade upcycled paper storage basket. Made from recycled waste paper, each basket is unique ",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXbI7XvR6mKgC6W-8RE2SjKxv-uQr9R_wSoCKznf-4-isFBs71ec-6ch6vNTlb9lWfqXBn7rhZzKob_rfNbz8371sd4Jm2JuG2ed3XMJTf2-waBacEvYYSNA&usqp=CAE"
  },
   {
    id: 1026,
    name: "Glazed Upcycled Plastic Box Stand | Okhai",
    category: "Essentials",
    price: 400,
    about: "A multi-functional storage box stand handwoven using jute and yellow upcycled plastic ropes. Feature a spacious lid box and placed on a hairpin iron leg stand",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlh_2GIt-PuP0ht-LRhq0-kYyliVr-X5cg-1cctxo7b7nZkdwoPN3LRPf0xYgvwxew-h8TGHHF_bmHOm9I-H9DgotABCczJ9hVBhk0syn1&usqp=CAE"
  },
   {
    id: 1027,
    name: "Recycled Newspaper Table Basket",
    category: "Essentials",
    price: 300,
    about: "This hand woven product is one hundred percent recycled, made using only spare newspapers. It is, however strong enough to carry heavy items. Its unique shape/pattern ",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfBPsydOvm3ri1EiMDnKNGMxar3zRrtUysL-1HYef_fhwCKli0T_rfS9Dfj9U7O0xIOtOSj9H0_2SIe808BikbwRkd-A93oxbpxSVhF8pA&usqp=CAE"
  },
   {
    id: 1028,
    name: "	Irida Naturals Unbreakable & Eco-friendly Lightweight Water Bottles",
    category: "Essentials",
    price: 600,
    about: "rida Naturals Is A Company That Sells Sustainable Homeware And Kitchenware. At Irida Naturals, We Believe That It Is Our Duty, As A Community, To Reduce The Gaping Levels Of Plastic",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwxA92doUuEQlOQijm4xwXd0JHnVll7QU9GqEXw_aCiv2LlePmpjg3HB6MBST3qcWhE7TknzVIHufEiyGyYlxEbAl_YJrsyahD0Ur05IdV&usqp=CAE"
  },
   {
    id: 1029,
    name: "Self Cooling Eco Friendly Clay Mitti Terracotta Water Bottle",
    category: "Essentials",
    price: 700,
    about: "Experience pure, chilled water on-the-go with our self-cooling eco-friendly terracotta bottle. Buy online and enjoy fresh hydration",
    images: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTievsTdeA9tvcN0gdb6rJAg5LLDaxaJ4s0L6FADtN8iQXjm4HzeVRxN_tUx-52iKCGaP295AztKH_IZlI0Ex1jqzANH4mRnSDvdHW1W6SW&usqp=CAE"
  },
   {
    id: 1030,
    name: "Irida Naturals Plastic Serving Bowl Unbreakable Eco-friendly Bowls",
    category: "Essentials",
    price: 400,
    about: "rida Naturals Is A Company That Sells Sustainable Homeware And Kitchenware. At Irida Naturals, We Believe That It Is Our Duty, As A Community, To Reduce The Gaping Levels Of plastic",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpdaxp2JaZvVdEc38hQra_zaNx6xMGlsZMkjN2OWa_E1f0FByeiOsHUPP3IaSMMtKqhpNJjdVoogBHoIpTp6qk2ZFovyZZPUHt6nUvkWSR&usqp=CAE"
  },
];

export default items