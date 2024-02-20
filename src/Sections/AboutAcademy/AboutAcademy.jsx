
import { SectionWrapper } from '../../Components'
import { FaBullseye, FaRegQuestionCircle } from 'react-icons/fa'
import {  FaRegFontAwesome } from 'react-icons/fa6'

import C_Ahmed from '../../Assets/Images/C-Ahmed.jpg'
import hema from '../../Assets/Images/Players/hema-01.jpg'
import logo_01 from '../../Assets/Images/phoenix-01.jpg'
import logo_02 from '../../Assets/Images/phoenix-02.jpg'
import logo_03 from '../../Assets/Images/phoenix-03.jpg'
import Logo from '../../Assets/Images/logo.png'

import './AboutAcademy.css'




const AboutAcademy = () => {
    return(
        <>
            <div className="AboutAcademy-Section">
                <SectionWrapper>
                    <div className="AboutAcademyContainer">

                        <div className="AboutAcademy" id='Future'>
                            <div className="paragraphSpace">
                                <div className="paragraphTitle Future-C_Ahmed" >
                                    <span>
                                        <img src={Logo} alt="Logo" className='logoAbout img-fluid' />
                                    </span>
                                    <span className='txt'>
                                        فيوتشر 
                                    </span>
                                </div>
                                <p className="paragraphText">
                                    أسس كابتن احمد سعيد لاعب الزمالك ومنتخب مصر للشباب اكاديمية فيوتشر في عام 2016 
                                    وخاضت الاكاديمية الكثير من البطولات وحصل علي المركز الاول ببطولات 
                                    مثل : (
                                        نادي الفروسية - الحريف - فيت بلاير - بطولة الجيش بنادي جويل "توليب" سابقا
                                    )
                                    بمختلف الاعمار السنية .                    
                                </p>
                            </div>
                            <div className="imgSpace">
                                <div className="imageWrapper">
                                    <img src={C_Ahmed} alt="C.Ahmed" className='img-fluid ' />
                                </div>
                            </div>
                        </div>

                        <div className="AboutAcademy" id='Goals'>
                            <div className="paragraphSpace">
                                <div className="paragraphTitle">
                                    <FaBullseye />
                                    <span>
                                        اهدافنا 
                                    </span>
                                </div>
                                <p className="paragraphText mb-3">
                                    نحن نحرص علي جعل جميع اللاعبين في كامل مستواهم واقصي ما 
                                    يمكن الوصول له ثم تسويقهم لجميع اندية مصر وذالك عبر :-
                                </p>
                                <ol>
                                    <li className='mt-1'>
                                        خوض مبارايات ودية مع الاندية
                                    </li>
                                    <li className='mt-1'>
                                        المشاركة ببطولات منظورة من الكشافين واكساب اللاعبين الكثير من الخبرة
                                    </li>
                                    <li className='mt-1'>
                                        خوض اختبارات مع اندية من خلال فترة معايشة مع الفريق
                                    </li>
                                </ol>
                            </div>
                            <div className="imgSpace">
                                <div className="imageWrapper">
                                    <img src={hema} alt="C.Ahmed" className='img-fluid' />
                                </div>
                            </div>
                        </div>

                        <div className="AboutAcademy" id='WhyUs'> 
                            <div className="paragraphSpace">
                                <div className="paragraphTitle">
                                    <FaRegQuestionCircle />
                                    <span>
                                        لماذا نحن ؟
                                    </span>
                                </div>
                                <p className="paragraphText">
                                    نحن نجتهد في ان يصل لكل لاعب اكبر قدر من المعرفة بجميع التقنيات والتكنيك للعبة
                                    وفي تحسين تفكير اللاعب داخل وخارج الملعب واتخاذ قرارته واعداد اللاعبين
                                    بدنيا وذهنيا واخراج افضل مستوي للاعب ثم تسويقة للاندية وايضا هناك اعمار
                                    سنية مختلفة ولكل فئة عمريه نظامها الخاص فللبراعم نظام غير الناشئين غير الشباب.
                                </p>
                            </div>
                            <div className="imgSpace">
                                <div className="imageWrapper">
                                    <img src={hema} alt="C.Ahmed" className='img-fluid' />
                                </div>
                            </div>
                        </div>

                        <div className="AboutAcademy logoContent" id='Logo'>
                            <div className="paragraphSpace">
                                <div className="paragraphTitle">
                                    <span>
                                        <FaRegFontAwesome />
                                        لشعار
                                    </span>
                                    <span>
                                        <img src={Logo} alt="Logo" className='logoAbout img-fluid' />
                                    </span>
                                </div>
                                <p className="paragraphText">
                                    طائر العنقاء الاسطوري المتوج عرفه العرب بالعنقاء وعرف في الغرب بالفينيق أو الفينكس، وهو طائر ضخم يموت باحتراقه ويحيا من رماده.. فما القصة؟
                                    <br /> <br />
                                    ارتبط في الثقافة الإنسانية بأنه أسطوري، بالرغم من إيجاد رسومات موجودة في كهوف وعلى جدران أثرية تعود إلى أسر وحضارات مُختلفة كالفرعونية والفينيقية، كما يحكى في الأساطير الشعبية، أن العنقاء لها القدرة على العودة من الموت.
                                    <br /><br />
                                    تقول الأساطير، عاش طائر العنقاء في شبه الجزيرة العربية، وكان يعمر نحو 500 سنة، وفي كل تلك السنوات لا يوجد إلا طائر عنقاء واحد، وهو طائر طويل العنق؛ لذا سماه العرب بالعنقاء.
                                    <br /> <br />
                                    تتابع الأساطير، أن هذا الطائر يمتاز بالجمال والقوة، وعندما يوشك على الموت يترك موطنه ويطير صوب فينيقيا، أي "لبنان حاليًا"، يختار نخلة شاهقة تصل قمتها إلى السماء، ويبني له عُشًا، بعد ذلك يموت في النار، ومن رماده يخرج مخلوق جديد، دودة لها لون الحليب تتحول إلى شرنقة ويخرج من هذه الشرنقة طائر عنقاء جديد، يطير عائدًا إلى موطنه الأصلي ويحمل كل بقايا جسده القديم إلى مذبح الشمس في "هيليوبلس" بمصر، وكان شعب مصر يحيي هذا الطائر العجيب قبل أن يعود إلى بلده في الشرق.
                                    <br /> <br />
                                    في الحضارة الفرعونية تلعب العنقاء التي تتم الإشارة إليها على أنها أنثى، دورًا مهمًا، وهي عبارة عن حيوان ينتهي وجهه بمنقار نسر على جسد أسد وذو جناحين قويين.
                                    وفى "العالم الهيليني" هو حارس وحامي بسبب قوته، فهو يحمي كنوز خاصة في "أبولو"، وكتب "كلاودينيوس" العديد من الأشعار التي تختص بطائر العنقاء، فذكر أن هناك طائرًا مخلدًا يستطيع العودة من الموت ويسكن في بستان مليء بالأشجار والأزهار، كما أنه ليس مُعرضًا للشيخوخة، بالإضافة إلى أنه يغني ويردد بعض الأغاني الجميلة.
                                    <br /> <br />
                                    وعلى حدٍ سواء، فإذا كانت قصة العنقاء حقيقية أو أسطورية، فهي تستحق أن تروى.
                                </p>
                            </div>
                            <div className="imgSpace logoItemImgContainer">
                                <div className="imageWrapper">
                                    <img src={logo_01} alt="C.Ahmed" className='img-fluid' />
                                </div>
                                <div className="imageWrapper">
                                    <img src={logo_02} alt="C.Ahmed" className='img-fluid' />
                                </div>
                                <div className="imageWrapper">
                                    <img src={logo_03} alt="C.Ahmed" className='img-fluid' />
                                </div>
                            </div>
                        </div>

                    </div>
                </SectionWrapper>
            </div>
        </>
    )
}
export default AboutAcademy