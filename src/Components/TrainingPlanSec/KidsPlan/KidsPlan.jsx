import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
    } from 'mdb-react-ui-kit';

import './KidsPlan.css'
import '../MainCssFile/mainPlanFile.css'





const KidsPlan = () => {
    const [basicActive, setBasicActive] = useState('tab1');

        const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
    
        setBasicActive(value);
    };
    return (
        <>
            <div className="TrainPlan KidsPlan">
                <div className="TrainPlanHeader">
                    <div className="TrainPlanTitle">
                        البراعم
                    </div>
                    <p>
                        فئة البراعم وهي ما دون التاسعة في مجال كرة القدم تعد مرحلة مهمة جداً من مراحل
                        التكوين البدني والفني والنفسي والعقلي، وتحتاج إلى تكثيف العناية والاهتمام بها،
                        وتوفير جميع الإمكانات المادية والمعنوية واللوجستية، لأنها تعتبر الثروة الحقيقية
                        ومستقبل الأمة في المجال الرياضي، وفي هذا الصدد يجب أن تتكاتف كل الجهات ذات الصلة ...
                        <br />
                        وتقسم التمارين بالاكاديمية الي ثلاث ايام :-
                    </p>

                </div>
                <MDBTabs pills className='mb-3'>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            السبت
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            الاتنين
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            الخميس
                        </MDBTabsLink>
                    </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </>
    )
}

export default KidsPlan