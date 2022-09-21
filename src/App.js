import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Courss from "./components/Courss";
import Footer from "./components/Footer";
import Cards from "./components/Slideshow";
import M1 from "./images/m1.png";
import M2 from "./images/m2.jpeg";
import M3 from "./images/m3.png";
import M4 from "./images/m4.png";
import M5 from "./images/m5.png";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Cards
          img={M1}
          title="Bash 101"
          text="ستتعلم فيه هذه الدورة مجموعة من أساسيات Bash والتي بدورها تقوم بتأهيلك إلى Bash Scripting."
        />
        <Cards img={M2} />
        <Cards
          img={M3}
          title="Git 102"
          text="في هذه الدورة ستتعلم كيفية إدارة المشروع لأكثر من Branch وكيفية دمجها وحل مشكلة التعارض أثناء الدمج."
        />
        <Cards
          img={M4}
          title="Git 101"
          text="في هذه الدورة ستتعلم برنامج Git وكيفية عمله؟ وفيما تحتاجه؟ معرفة الأوامر الأساسية لبرنامج Git وكيفية إدارة المشاريع ..."
        />
        <Cards img={M5} />
        <Cards
          img={M1}
          title="Bash 101"
          text="ستتعلم فيه هذه الدورة مجموعة من أساسيات Bash والتي بدورها تقوم بتأهيلك إلى Bash Scripting."
        />
        <Cards img={M2} />
        <Cards
          img={M3}
          title="Git 102"
          text="في هذه الدورة ستتعلم كيفية إدارة المشروع لأكثر من Branch وكيفية دمجها وحل مشكلة التعارض أثناء الدمج."
        />
        <Cards
          img={M4}
          title="Git 101"
          text="في هذه الدورة ستتعلم برنامج Git وكيفية عمله؟ وفيما تحتاجه؟ معرفة الأوامر الأساسية لبرنامج Git وكيفية إدارة المشاريع ..."
        />
        <Cards img={M5} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
