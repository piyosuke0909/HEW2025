import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            認証システム
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
            Google、Facebook、メールアドレスでログインできます
          </p>
          <Link 
            href="/auth/signin"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "background-color 0.2s"
            }}
          >
            🔐 ログインページへ
          </Link>
        </div>
  );
}
