import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* here starts the main container */}
      <h1>Hello from NextJS!</h1>
      <Hero />
    </>
  );
}
