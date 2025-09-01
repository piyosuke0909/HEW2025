"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/auth/signin")
    }
  }, [session, status, router])

  if (status === "loading") {
    return (
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        fontSize: "18px"
      }}>
        読み込み中...
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "2rem"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ 
            color: "#28a745", 
            fontSize: "2.5rem", 
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>
            🎉 ログイン完了！
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
            認証が正常に完了しました。
          </p>
        </div>

        <div style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "1.5rem", 
          borderRadius: "8px", 
          marginBottom: "2rem" 
        }}>
          <h2 style={{ color: "#333", marginBottom: "1rem" }}>ユーザー情報</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            {session.user?.image && (
              <Image 
                src={session.user.image} 
                alt="User Avatar" 
                width={60}
                height={60}
                style={{ 
                  borderRadius: "50%",
                  objectFit: "cover"
                }} 
              />
            )}
            <div>
              <p style={{ margin: "0", fontSize: "1.1rem", fontWeight: "bold" }}>
                {session.user?.name || "ユーザー"}
              </p>
              <p style={{ margin: "0", color: "#666" }}>
                {session.user?.email}
              </p>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: "#e8f5e8", 
          padding: "1.5rem", 
          borderRadius: "8px", 
          marginBottom: "2rem",
          border: "2px solid #28a745"
        }}>
          <h3 style={{ color: "#28a745", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            ✅ 認証機能
          </h3>
          <ul style={{ margin: "0", paddingLeft: "1.5rem", color: "#333" }}>
            <li>Google OAuth認証</li>
            <li>Facebook OAuth認証</li>
            <li>メールアドレス認証</li>
            <li>Firebase連携</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{
              padding: "12px 24px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  )
}