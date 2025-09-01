# 認証システム - NextAuth.js + Firebase

NextAuth.jsとFirebaseを使用した認証システムです。Google、Facebook、メールアドレスでの認証に対応しています。

## 機能

- ✅ Google OAuth認証
- ✅ Facebook OAuth認証  
- ✅ メールアドレス認証
- ✅ Firebase連携
- ✅ ログイン完了画面
- ✅ セッション管理

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の値を設定してください：

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# Firebase
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id
```

### 3. OAuth設定

#### Google OAuth
1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. プロジェクトを作成または選択
3. APIs & Services > Credentialsに移動
4. OAuth 2.0 Client IDsを作成
5. Authorized redirect URIsに `http://localhost:3000/api/auth/callback/google` を追加

#### Facebook OAuth
1. [Facebook Developers](https://developers.facebook.com/)にアクセス
2. アプリを作成
3. Facebook Loginを追加
4. Valid OAuth Redirect URIsに `http://localhost:3000/api/auth/callback/facebook` を追加

#### Firebase設定
1. [Firebase Console](https://console.firebase.google.com/)にアクセス
2. プロジェクトを作成
3. Authenticationを有効化
4. プロジェクト設定から設定値を取得

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)でアプリケーションにアクセスできます。

## 使用方法

1. ホームページから「ログインページへ」をクリック
2. Google、Facebook、またはメールアドレスでログイン
3. ログイン成功後、ダッシュボードページに「ログイン完了」が表示されます

## プロジェクト構造

```
src/
├── app/
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts              # NextAuth.js API設定
│   ├── auth/signin/
│   │   └── page.tsx              # ログインページ
│   ├── dashboard/
│   │   └── page.tsx              # ダッシュボード（ログイン完了画面）
│   ├── layout.tsx                # メインレイアウト
│   └── page.tsx                  # ホームページ
├── components/
│   └── providers.tsx             # SessionProvider
├── lib/
│   └── firebase.ts               # Firebase設定
└── types/
    └── next-auth.d.ts            # NextAuth.js型定義
```

## 技術スタック

- [Next.js 15](https://nextjs.org/) - React フレームワーク
- [NextAuth.js](https://next-auth.js.org/) - 認証ライブラリ
- [Firebase](https://firebase.google.com/) - バックエンドサービス
- [TypeScript](https://www.typescriptlang.org/) - 型安全性

## Learn More

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
