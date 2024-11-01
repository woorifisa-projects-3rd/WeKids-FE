import Image from "next/image";
import "./globals.css";
import Upload from "../ui/Components/Upload";

export default function Home() {
  return (
    <div>
      <h1 className="wooridaumL">Hello World적용됨????</h1>
      <p className="wooridaumB">여기에만 적용하고 싶어요</p>
      <Upload />
    </div>
  );
}
