import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    where,
    query,
    addDoc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBJ7hTNzyDgElB7vZJhoaGCVn0Rk-Hi1jU",
    authDomain: "bonsai-studio.firebaseapp.com",
    projectId: "bonsai-studio",
    storageBucket: "bonsai-studio.appspot.com",
    messagingSenderId: "1042558536180",
    appId: "1:1042558536180:web:26a61c0252ff8afb02d1a1"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);



async function getData() {
    const productsRef = collection(db, "products");
    const documentsSnapshot = await getDocs(productsRef);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map(
    (item) => {
        return { ...item.data(), id: item.id };
    }
    );
    return docsData;
};


async function getProductData(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
    throw new Error("No encontramos ese producto.");
    }
};


async function getCategoryData(category) {
    const productsRef = collection(db, "products");

    const q = query(productsRef, where("category", "==", category));
    const documentsSnapshot = await getDocs(q);

    const documents = documentsSnapshot.docs;

    return documents.map((item) => ({ ...item.data(), id: item.id }));
};

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)

    return(docCreated.id)
};


async function getOrder(id){
    const docRef = doc(db, "orders", id);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
};


/*async function _exportProducts(){
    const products =[
        {
            id: 1,
            title:"Buganvilia de 15 años",
            author:"Kunio Kobayashi",
            price: 1500,
            category: "Perennes",
            img: "https://i.ibb.co/0VqGzQk/Cadufilos-1.jpg",
            stock: 3,
            description: "Buganvilia Perennes de 15 años de tamaño medio",
        },
        {
            id: 2,
            title:"Granado de 30 años",
            author:"John Yoshio Naka",
            price: 3000,
            category: "Caducifolios",
            img: "https://i.ibb.co/8XmCDcr/Cadufilos-2.jpg",
            stock: 2,
            description: "Granado de 30 años de tamaño medio",
        },
        {
            id: 3,
            title:"Arce Americano de 50 años",
            author:"John Yoshio Naka",
            price: 5000,
            category: "Caducifolios",
            img: "https://i.ibb.co/1Q4JWJH/Cadufilos-3.jpg",
            stock: 1,
            description: "Arce Americano de 50 años de tamaño grande",
        },
        {
            id: 4,
            title:"Arce Japones de 30 años",
            author:"John Yoshio Naka",
            price: 3000,
            category: "Caducifolios",
            img: "https://i.ibb.co/SV6847B/Cadufilos-4.jpg",
            stock: 3,
            description: "Arce Japones de 30 años de tamaño grande",
        },
        {
            id: 5,
            title:"Peral de 20 años",
            author:"Kunio Kobayashi",
            price: 2000,
            category: "Caducifolios",
            img: "https://i.ibb.co/mNpKtzK/Cadufilos.jpg",
            stock: 4,
            description: "Peral de 20 años de tamaño pequeño",
        },
        {
            id: 6,
            title:"Ficus Ginseg de 40 años",
            author:"John Yoshio Naka",
            price: 4000,
            category: "Perennes",
            img: "https://i.ibb.co/M1Q790b/Perennes-1.jpg",
            stock: 2,
            description: "Ficus Ginseg de 40 años de tamaño grande",
        },
        {
            id: 7,
            title:"Juniperus Chinensis de 10 años",
            author:"Kunio Kobayashi",
            price: 1000,
            category: "Perennes",
            img: "https://i.ibb.co/Tbs8X9p/Perennes-2.jpg",
            stock: 8,
            description: "Juniperus Chinensis de 10 años de tamaño pequeño",
        },
        {
            id: 8,
            title:"Juniperus Chinensis de 30 años",
            author:"John Yoshio Naka",
            price: 3000,
            category: "Perennes",
            img: "https://i.ibb.co/HxhmBqf/Perennes-3.webp",
            stock: 2,
            description: "Juniperus Chinensis de 30 años de tamaño medio",
        },
        {
            id: 9,
            title:"Juniperus Chinensis de 15 años",
            author:"Kunio Kobayashi",
            price: 1500,
            category: "Perennes",
            img: "https://i.ibb.co/2ySTWXs/Perennes-4.webp",
            stock: 1,
            description: "Juniperus Chinensis de 15 años de tamaño medio",
        },
        {
            id: 10,
            title:"Juniperus Procumbens de 15 años",
            author:"Kunio Kobayashi",
            price: 1500,
            category: "Perennes",
            img: "https://i.ibb.co/h8JG3JP/Perennes-5.webp",
            stock: 2,
            description: "Juniperus Procumbens de 15 años de tamaño grande",
        },
        {
            id: 11,
            title:"Juniperus Chinensis de 8 años",
            author:"Kunio Kobayashi",
            price: 800,
            category: "Perennes",
            img: "https://i.ibb.co/Xx3BP8D/Perennes-7.jpg",
            stock: 7,
            description: "Juniperus Chinensis de 8 años de tamaño pequeño",
        },
        {
            id: 12,
            title:"Ficus Microcarpa de 18 años",
            author:"Kunio Kobayashi",
            price: 1800,
            category: "Perennes",
            img: "https://i.ibb.co/FmmCbpr/Perennes-8.jpg",
            stock: 3,
            description: "Ficus Microcarpa de 18 años de tamaño medio",
        },
        {
            id: 13,
            title:"Juniperus Sabina de 28 años",
            author:"John Yoshio Naka",
            price: 2800,
            category: "Perennes",
            img: "https://i.ibb.co/BjyjYbr/Perennes-9.jpg",
            stock: 4,
            description: "Juniperus Sabina de 28 años de tamaño grande",
        },
        {
            id: 14,
            title:"Juniperus Thurifera de 80 años",
            author:"John Yoshio Naka",
            price: 8000,
            category: "Perennes",
            img: "https://i.ibb.co/LgbMZFz/Perennes-10.jpg",
            stock: 1,
            description: "Juniperus Thurifera de 80 años de tamaño grande",
        },
        {
            id: 15,
            title:"Ilex Crenata de 20 años",
            author:"Kunio Kobayashi",
            price: 2000,
            category: "Perennes",
            img: "https://i.ibb.co/pfRfFJf/Perennes-11.jpg",
            stock: "4",
            description: "Ilex Crenata de 20 años de tamaño pequeño",
        },
        {
            id: 16,
            title:"Ficus Ginseg de 30 años",
            author:"John Yoshio Naka",
            price: 3000,
            category: "Perennes",
            img: "https://i.ibb.co/3SRYjq0/Perennes-12.jpg",
            stock: 4,
            description: "Ficus Ginseg de 30 años de tamaño grande",
        },
        {
            id: 17,
            title:"Cedrus Deodara de 20 años",
            author:"Kunio Kobayashi",
            price: 2000,
            category: "Perennes",
            img: "https://i.ibb.co/Y37Zq2k/Perennes.jpg",
            stock: 3,
            description: "Cedrus Deodara de 20 años de tamaño medio",
        },
        {
            id: 18,
            title:"Sustrato Verdecora X 3Lts.",
            author:"Bonsaierde",
            price: 30,
            category: "Sustrato",
            img: "https://i.ibb.co/VDfP74M/Sustratos-1.jpg",
            stock: 30,
            description: "Con grana volcanica y ph neutro, ideal para tus bonsáis",
        },
        {
            id: 19,
            title:"Sustrato FloraGrand X 5Lts.",
            author:"Bonsaierde",
            price: 50,
            category: "Sustrato",
            img: "https://i.ibb.co/qMXYdJ4/Sustratos-2.jpg",
            stock: "20",
            description: "Con astillas vegetales tratadas y ph neutro, ideal para tus bonsáis tropicales",
        },
        {
            id: 20,
            title:"Sustrato Terrafertil X 3Lts.",
            author:"Bonsaierde",
            price: 30,
            category: "Sustrato",
            img: "https://i.ibb.co/TT7kyxv/Sustratos-2.png",
            stock: 40,
            description: "Con granulometria fina y ph neutro, ideal para tus bonsáis o kokedamas",
        },
        {
            id: 20,
            title:"Bonsai para principiantes",
            author:"Nancy Ross",
            price: 300,
            category: "Libros",
            img: "https://i.ibb.co/tKfvwnt/Libro-2.jpg",
            stock: 10,
            description: "El árbol Bonsái es una excelente opción para cualquier jardín. Aunque no provee el alimento ni la medicina como otras plantas lo hacen, el árbol Bonsái es capaz de proveer belleza al jardín y puede ser una muy buena manera de exhibir tu trabajo como jardinero, o incluso hacer un gran regalo. Aunque estos árboles vienen tradicionalmente de China y Japón, son fantásticos para tenerlos en el mundo occidental. Esta guía hablará de muchos temas acerca de lo que necesitas saber para comenzar a cultivar un Bonsái en tu propio hogar.",
        },
        {
            id: 21,
            title:"Manual de bonsai",
            author:"Anne Swinton",
            price: 200,
            category: "Libros",
            img: "https://i.ibb.co/zNR2XSx/Libro-1.jpg",
            stock: 20,
            description: "Uno de los placeres que ofrece este libro es un recuento de los muchos árboles que se prestan a este tipo de cultivo, y mientras describe la formación y varias posibles formas finales de bonsai, la authora informa de la esencial y casi inexplicable sensibilización a lo que conforma un buen ejemplar. A cualquier nivel de aproximación, el cultivo del bonsai es un fascinante pasatiempo, y este libro le ayudará a disfrutar de él totalmente.",
        },
        {
            id: 22,
            title:"Cultivo y cuidados del bonsai",
            author:"Richie Donald",
            price: 150,
            category: "Libros",
            img: "https://i.ibb.co/WFyGPHs/Libro-1.jpg",
            stock: 30,
            description: "Un excelente libro para los que se inician en este apasionante hobby con apartados como: El placer de cultivar bonsai; Estilos de bonsai; Apreciación del bonsai; Plantas aconsejables para el bonsai; Cultivo del bonsai; Cuidados del bonsai; Preparación del bonsai; Adaptación de los estilos bonsai; Técnicas prácticas y muchos más.",
        },
        {
            id: 23,
            title:"Curso para principiantes en el cuidado del bonsai",
            author:"Kunio Kobayashi",
            price: 1000,
            category: "Cursos",
            img: "https://i.ibb.co/51WRQNN/Cuidados-2.webp",
            stock: 8,
            description: "Sumérgete en el mundo mágico del bonsái con nuestro curso diseñado especialmente para principiantes. El arte del bonsái es una antigua tradición japonesa que ha cautivado a personas de todo el mundo con su belleza y serenidad. En este curso, aprenderás las técnicas fundamentales para cultivar, diseñar y mantener tus propios árboles en miniatura, creando así tu propio oasis de tranquilidad.",
        },
        {
            id: 24,
            title:"Curso para intermedios en el cuidado del bonsai",
            author:"Kunio Kobayashi",
            price: 1500,
            category: "Cursos",
            img: "https://i.ibb.co/L1pkht8/cuidados.jpg",
            stock: 5,
            description: "¡Eleva tu pasión por el bonsái al siguiente nivel con nuestro emocionante curso intermedio! En esta etapa, exploraremos técnicas más avanzadas que te permitirán perfeccionar tus habilidades en el cultivo y diseño de estos hermosos árboles en miniatura. Si ya tienes experiencia en el bonsái y deseas expandir tus conocimientos y destrezas, este curso es ideal para ti.",
        },
        {
            id: 25,
            title:"Curso para expertos en el cuidado del bonsai",
            author:"John Yoshio Naka",
            price: 2000,
            category: "Cursos",
            img: "https://i.ibb.co/3Mj8NMv/cuidados-2.jpg",
            stock: 3,
            description: "¡Bienvenido al nivel experto en el arte del bonsái! Este curso está diseñado para aquellos entusiastas del bonsái que desean alcanzar la maestría en esta antigua forma de arte. Exploraremos técnicas profundas y refinadas que te permitirán elevar tus habilidades de diseño y cuidado de bonsáis a un nivel de excelencia. Prepárate para perfeccionar tu arte y descubrir los secretos de los maestros bonsái.",
        },
    ];
    for(let item of products){   
        const collectionRef = collection(db, "products")
        const docCreated = await addDoc(collectionRef, item);
        console.log("Doc created with id:", docCreated.id)
        }
    };

async function _exportProductsWithBatch(){
        const products =[
            {
                id: 1,
                title:"Buganvilia de 15 años",
                author:"Kunio Kobayashi",
                price: 1500,
                category: "Perennes",
                img: "https://i.ibb.co/0VqGzQk/Cadufilos-1.jpg",
                stock: 3,
                description: "Buganvilia Perennes de 15 años de tamaño medio",
            },
            {
                id: 2,
                title:"Granado de 30 años",
                author:"John Yoshio Naka",
                price: 3000,
                category: "Caducifolios",
                img: "https://i.ibb.co/8XmCDcr/Cadufilos-2.jpg",
                stock: 2,
                description: "Granado de 30 años de tamaño medio",
            },
            {
                id: 3,
                title:"Arce Americano de 50 años",
                author:"John Yoshio Naka",
                price: 5000,
                category: "Caducifolios",
                img: "https://i.ibb.co/1Q4JWJH/Cadufilos-3.jpg",
                stock: 1,
                description: "Arce Americano de 50 años de tamaño grande",
            },
            {
                id: 4,
                title:"Arce Japones de 30 años",
                author:"John Yoshio Naka",
                price: 3000,
                category: "Caducifolios",
                img: "https://i.ibb.co/SV6847B/Cadufilos-4.jpg",
                stock: 3,
                description: "Arce Japones de 30 años de tamaño grande",
            },
            {
                id: 5,
                title:"Peral de 20 años",
                author:"Kunio Kobayashi",
                price: 2000,
                category: "Caducifolios",
                img: "https://i.ibb.co/mNpKtzK/Cadufilos.jpg",
                stock: 4,
                description: "Peral de 20 años de tamaño pequeño",
            },
            {
                id: 6,
                title:"Ficus Ginseg de 40 años",
                author:"John Yoshio Naka",
                price: 4000,
                category: "Perennes",
                img: "https://i.ibb.co/M1Q790b/Perennes-1.jpg",
                stock: 2,
                description: "Ficus Ginseg de 40 años de tamaño grande",
            },
            {
                id: 7,
                title:"Juniperus Chinensis de 10 años",
                author:"Kunio Kobayashi",
                price: 1000,
                category: "Perennes",
                img: "https://i.ibb.co/Tbs8X9p/Perennes-2.jpg",
                stock: 8,
                description: "Juniperus Chinensis de 10 años de tamaño pequeño",
            },
            {
                id: 8,
                title:"Juniperus Chinensis de 30 años",
                author:"John Yoshio Naka",
                price: 3000,
                category: "Perennes",
                img: "https://i.ibb.co/HxhmBqf/Perennes-3.webp",
                stock: 2,
                description: "Juniperus Chinensis de 30 años de tamaño medio",
            },
            {
                id: 9,
                title:"Juniperus Chinensis de 15 años",
                author:"Kunio Kobayashi",
                price: 1500,
                category: "Perennes",
                img: "https://i.ibb.co/2ySTWXs/Perennes-4.webp",
                stock: 1,
                description: "Juniperus Chinensis de 15 años de tamaño medio",
            },
            {
                id: 10,
                title:"Juniperus Procumbens de 15 años",
                author:"Kunio Kobayashi",
                price: 1500,
                category: "Perennes",
                img: "https://i.ibb.co/h8JG3JP/Perennes-5.webp",
                stock: 2,
                description: "Juniperus Procumbens de 15 años de tamaño grande",
            },
            {
                id: 11,
                title:"Juniperus Chinensis de 8 años",
                author:"Kunio Kobayashi",
                price: 800,
                category: "Perennes",
                img: "https://i.ibb.co/Xx3BP8D/Perennes-7.jpg",
                stock: 7,
                description: "Juniperus Chinensis de 8 años de tamaño pequeño",
            },
            {
                id: 12,
                title:"Ficus Microcarpa de 18 años",
                author:"Kunio Kobayashi",
                price: 1800,
                category: "Perennes",
                img: "https://i.ibb.co/FmmCbpr/Perennes-8.jpg",
                stock: 3,
                description: "Ficus Microcarpa de 18 años de tamaño medio",
            },
            {
                id: 13,
                title:"Juniperus Sabina de 28 años",
                author:"John Yoshio Naka",
                price: 2800,
                category: "Perennes",
                img: "https://i.ibb.co/BjyjYbr/Perennes-9.jpg",
                stock: 4,
                description: "Juniperus Sabina de 28 años de tamaño grande",
            },
            {
                id: 14,
                title:"Juniperus Thurifera de 80 años",
                author:"John Yoshio Naka",
                price: 8000,
                category: "Perennes",
                img: "https://i.ibb.co/LgbMZFz/Perennes-10.jpg",
                stock: 1,
                description: "Juniperus Thurifera de 80 años de tamaño grande",
            },
            {
                id: 15,
                title:"Ilex Crenata de 20 años",
                author:"Kunio Kobayashi",
                price: 2000,
                category: "Perennes",
                img: "https://i.ibb.co/pfRfFJf/Perennes-11.jpg",
                stock: "4",
                description: "Ilex Crenata de 20 años de tamaño pequeño",
            },
            {
                id: 16,
                title:"Ficus Ginseg de 30 años",
                author:"John Yoshio Naka",
                price: 3000,
                category: "Perennes",
                img: "https://i.ibb.co/3SRYjq0/Perennes-12.jpg",
                stock: 4,
                description: "Ficus Ginseg de 30 años de tamaño grande",
            },
            {
                id: 17,
                title:"Cedrus Deodara de 20 años",
                author:"Kunio Kobayashi",
                price: 2000,
                category: "Perennes",
                img: "https://i.ibb.co/Y37Zq2k/Perennes.jpg",
                stock: 3,
                description: "Cedrus Deodara de 20 años de tamaño medio",
            },
            {
                id: 18,
                title:"Sustrato Verdecora X 3Lts.",
                author:"Bonsaierde",
                price: 30,
                category: "Sustrato",
                img: "https://i.ibb.co/VDfP74M/Sustratos-1.jpg",
                stock: 30,
                description: "Con grana volcanica y ph neutro, ideal para tus bonsáis",
            },
            {
                id: 19,
                title:"Sustrato FloraGrand X 5Lts.",
                author:"Bonsaierde",
                price: 50,
                category: "Sustrato",
                img: "https://i.ibb.co/qMXYdJ4/Sustratos-2.jpg",
                stock: "20",
                description: "Con astillas vegetales tratadas y ph neutro, ideal para tus bonsáis tropicales",
            },
            {
                id: 20,
                title:"Sustrato Terrafertil X 3Lts.",
                author:"Bonsaierde",
                price: 30,
                category: "Sustrato",
                img: "https://i.ibb.co/TT7kyxv/Sustratos-2.png",
                stock: 40,
                description: "Con granulometria fina y ph neutro, ideal para tus bonsáis o kokedamas",
            },
            {
                id: 20,
                title:"Bonsai para principiantes",
                author:"Nancy Ross",
                price: 300,
                category: "Libros",
                img: "https://i.ibb.co/tKfvwnt/Libro-2.jpg",
                stock: 10,
                description: "El árbol Bonsái es una excelente opción para cualquier jardín. Aunque no provee el alimento ni la medicina como otras plantas lo hacen, el árbol Bonsái es capaz de proveer belleza al jardín y puede ser una muy buena manera de exhibir tu trabajo como jardinero, o incluso hacer un gran regalo. Aunque estos árboles vienen tradicionalmente de China y Japón, son fantásticos para tenerlos en el mundo occidental. Esta guía hablará de muchos temas acerca de lo que necesitas saber para comenzar a cultivar un Bonsái en tu propio hogar.",
            },
            {
                id: 21,
                title:"Manual de bonsai",
                author:"Anne Swinton",
                price: 200,
                category: "Libros",
                img: "https://i.ibb.co/zNR2XSx/Libro-1.jpg",
                stock: 20,
                description: "Uno de los placeres que ofrece este libro es un recuento de los muchos árboles que se prestan a este tipo de cultivo, y mientras describe la formación y varias posibles formas finales de bonsai, la authora informa de la esencial y casi inexplicable sensibilización a lo que conforma un buen ejemplar. A cualquier nivel de aproximación, el cultivo del bonsai es un fascinante pasatiempo, y este libro le ayudará a disfrutar de él totalmente.",
            },
            {
                id: 22,
                title:"Cultivo y cuidados del bonsai",
                author:"Richie Donald",
                price: 150,
                category: "Libros",
                img: "https://i.ibb.co/WFyGPHs/Libro-1.jpg",
                stock: 30,
                description: "Un excelente libro para los que se inician en este apasionante hobby con apartados como: El placer de cultivar bonsai; Estilos de bonsai; Apreciación del bonsai; Plantas aconsejables para el bonsai; Cultivo del bonsai; Cuidados del bonsai; Preparación del bonsai; Adaptación de los estilos bonsai; Técnicas prácticas y muchos más.",
            },
            {
                id: 23,
                title:"Curso para principiantes en el cuidado del bonsai",
                author:"Kunio Kobayashi",
                price: 1000,
                category: "Cursos",
                img: "https://i.ibb.co/51WRQNN/Cuidados-2.webp",
                stock: 8,
                description: "Sumérgete en el mundo mágico del bonsái con nuestro curso diseñado especialmente para principiantes. El arte del bonsái es una antigua tradición japonesa que ha cautivado a personas de todo el mundo con su belleza y serenidad. En este curso, aprenderás las técnicas fundamentales para cultivar, diseñar y mantener tus propios árboles en miniatura, creando así tu propio oasis de tranquilidad.",
            },
            {
                id: 24,
                title:"Curso para intermedios en el cuidado del bonsai",
                author:"Kunio Kobayashi",
                price: 1500,
                category: "Cursos",
                img: "https://i.ibb.co/L1pkht8/cuidados.jpg",
                stock: 5,
                description: "¡Eleva tu pasión por el bonsái al siguiente nivel con nuestro emocionante curso intermedio! En esta etapa, exploraremos técnicas más avanzadas que te permitirán perfeccionar tus habilidades en el cultivo y diseño de estos hermosos árboles en miniatura. Si ya tienes experiencia en el bonsái y deseas expandir tus conocimientos y destrezas, este curso es ideal para ti.",
            },
            {
                id: 25,
                title:"Curso para expertos en el cuidado del bonsai",
                author:"John Yoshio Naka",
                price: 2000,
                category: "Cursos",
                img: "https://i.ibb.co/3Mj8NMv/cuidados-2.jpg",
                stock: 3,
                description: "¡Bienvenido al nivel experto en el arte del bonsái! Este curso está diseñado para aquellos entusiastas del bonsái que desean alcanzar la maestría en esta antigua forma de arte. Exploraremos técnicas profundas y refinadas que te permitirán elevar tus habilidades de diseño y cuidado de bonsáis a un nivel de excelencia. Prepárate para perfeccionar tu arte y descubrir los secretos de los maestros bonsái.",
            },
        ];

        const batch = writeBatch(db); 
        products.forEach( producto => {
            const newId = producto.id
            delete producto.id;
            const newDoc = doc(db, "products", String(newId))
            batch.set(newDoc, producto);    
        })

        const data = await batch.commit()  
        console.log("Listo!", data)
        }*/
export { getData, getOrder, getProductData, getCategoryData, createOrder,};