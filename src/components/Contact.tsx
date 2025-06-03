import { Header } from './utils/Header';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const submitForm = async (form: HTMLFormElement) => {
    await fetch('https://formspree.io/f/mnnvqrgg', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    });
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          お問い合わせフォーム
        </h1>
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <form
            action="https://formspree.io/f/mnnvqrgg"
            method="POST"
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                placeholder="山田 太郎"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                placeholder="example@email.com"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-y min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  submitForm(e.currentTarget.form as HTMLFormElement);
                  navigate('/home');
                }}
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
