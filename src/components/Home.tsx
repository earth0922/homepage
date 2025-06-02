import { Header } from "./utils/Header";
import { MainFrame } from "./utils/MainFrame";

export default function Home() {
  return (
    <>
        <Header />
        <MainFrame className="mb-20">
            <div>
                <div className="w-full"> 
                    <img
                        src="/home/assets/program.jpg"
                        alt="Home Background"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>                    

                <span className="flex mt-12 justify-between gap-4">
                    <span className="max-w-[40%]">
                        <img
                        src="/home/assets/human.png"
                        alt="Human"
                        className="w-full rounded-lg"
                    />  
                    </span>
                    <div className="w-full md:max-w-1/2">
                        <div>
                            <ul className="space-y-2 md:space-y-4">
                                <li className="text-md md:text-2xl font-bold">Web 開発エンジニア</li>
                                <li className="text-sm md:text-lg">・エンジニア歴４年目</li>
                                <li className="text-sm md:text-lg">・娘大好き一児のパパ</li>
                                <li className="text-sm md:text-lg">・趣味はコーディング</li>
                                <li className="text-sm md:text-lg">・Web 開発/アプリケーション設計が好き</li>                                    
                            </ul>
                    </div>
                    </div>                        
                </span>



                <div className="w-full border-b-2 border-gray-300 my-8" />
                <div className="ml-5 mt-2">
                <div className="text-xl md:text-3xl font-bold">スキルセット(開発系)</div>
                <div className="ml-10 mt-5 flex gap-6 flex-col md:flex-row">
                    {/* 言語スキル */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4">開発言語</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">JavaScript/TypeScript</span>
                                    <span className="text-sm text-gray-600">3年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">Java</span>
                                    <span className="text-sm text-gray-600">2年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">Python</span>
                                    <span className="text-sm text-gray-600">5年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">Bash</span>
                                    <span className="text-sm text-gray-600">6年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-red-600 h-2 rounded-full" style={{width: '95%'}} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* フレームワーク */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4">フレームワーク</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">React</span>
                                    <span className="text-sm text-gray-600">3年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">Spring Boot</span>
                                    <span className="text-sm text-gray-600">1年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '60%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* クラウドプラットフォーム */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4">クラウドプラットフォーム</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">AWS</span>
                                    <span className="text-sm text-gray-600">1年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '65%'}} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-semibold">GCP</span>
                                    <span className="text-sm text-gray-600">1年</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '65%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-xl md:text-3xl font-bold mt-24">スキルセット(資格系)</div>
                    <h2 className="text-xl md:text-xl font-bold mb-3 mt-5 ml-7">資格・認定</h2>
                    <div className="flex flex-col ml-7 gap-6 md:flex-row">
                        {/* AWS Certifications */}
                        <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 md:p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-orange-600 mb-4">AWS 認定資格</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Checkmark icon</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Solutions Architect Associate</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Checkmark icon</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>SysOps Administrator</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Checkmark icon</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Developer Associate</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Checkmark icon</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Certified Cloud Practitioner</span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Microsoft Certifications */}
                        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-blue-600 mb-4">Microsoft 認定資格</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Checkmark icon</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Azure Fundamentals</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

            </div>
        </MainFrame>
    </>
  );
}