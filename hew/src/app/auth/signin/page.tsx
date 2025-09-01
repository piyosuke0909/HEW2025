"use client"

import { signIn, getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession()
      if (session) {
        router.push("/dashboard")
      }
    }
    checkSession()
  }, [router])

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Google sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFacebookSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("facebook", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Facebook sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signIn("email", { email, callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Email sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
          ログイン
        </h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            style={{
              padding: "12px 20px",
              backgroundColor: "#4285f4",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            🔍 Googleでログイン
          </button>

          <button
            onClick={handleFacebookSignIn}
            disabled={isLoading}
            style={{
              padding: "12px 20px",
              backgroundColor: "#1877f2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            📘 Facebookでログイン
          </button>

          <div style={{ textAlign: "center", margin: "1rem 0", color: "#666" }}>
            または
          </div>

          <form onSubmit={handleEmailSignIn} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px"
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              style={{
                padding: "12px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              📧 メールでログイン
            </button>
          </form>
        </div>
        
        {isLoading && (
          <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
            認証中...
          </p>
        )}
      </div>
    </div>
  )
}