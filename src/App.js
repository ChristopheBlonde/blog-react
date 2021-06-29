import "./App.css";
import Header from "./components/Hearder/Header";
import Article from "./components/Article/Article";
import imageProfile from "./images/Image d’iOS.jpg";
import banniere from "./images/banniere-5-masculin.png";
import banniere2 from "./images/banniere-1-feminin.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Article
          itemTitle="Title Heading"
          itemSubtitle="Title description"
          itemPicture={banniere}
          itemDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum temporibus aliquid, aspernatur dicta modi voluptatum nisi voluptas qui quos hic atque recusandae ea commodi. Esse illum perspiciatis sint in!LoremnLorem ipsum, dolor sit amet consectetur adipisicing elit"
          itemSideTitle="ABOUT ME"
          itemSidePicture={imageProfile}
          itemSideDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        />
        <Article
          itemTitle="Title Heading"
          itemSubtitle="Title description"
          itemPicture={banniere2}
          itemDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum temporibus aliquid, aspernatur dicta modi voluptatum nisi voluptas qui quos hic atque recusandae ea commodi. Esse illum perspiciatis sint in!LoremnLorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum temporibus aliquid, aspernatur dicta modi voluptatum nisi voluptas qui quos hic atque recusandae ea commodi. Esse illum perspiciatis sint in!LoremnLorem ipsum, dolor sit amet consectetur adipisicing elit"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
