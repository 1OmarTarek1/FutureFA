import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import './TrainingPlans.css'
import { BoysPlan, KidsPlan, MenPlan, SectionHeader, SectionWrapper } from '../../Components';





const TrainingPlans = ( {MainActivePlan} ) => {
    const [basicActive, setBasicActive] = useState( MainActivePlan );

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
    
        setBasicActive(value);
        };
    
    return (
    <>
    <div className="TrainingPlans" id='TrainingPlan'>
        <SectionHeader>
            الخطة التدريبية
        </SectionHeader>
        <SectionWrapper>
            <MDBTabs pills className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        البراعم
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        الناشئين
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        الشباب
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane open={basicActive === 'tab1'}>
                    <KidsPlan />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}>
                    <BoysPlan />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab3'}>
                    <MenPlan />
                </MDBTabsPane>
            </MDBTabsContent>
        </SectionWrapper>
    </div>
    </>
    );
}

export default TrainingPlans