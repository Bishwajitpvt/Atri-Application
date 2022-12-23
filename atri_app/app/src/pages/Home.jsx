import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usenavbarCb, usenavbar_fxbCb, useFlex16Cb, useFlex17Cb, useFlex19Cb, usemain_fxbCb, usetext_FlexCb, useh1_divCb, usedetail_holderCb, usebtnAndText_flxCb, useFlex24Cb, useimg_FlexCb, usetrusted_flxCb, usetrusted_divCb, usetrusted_logo_flxCb, useFlex27Cb, useservices_flxCb, useheader_holderCb, useservice_headerCb, usetitle_divCb, usecontainer_flxCb, useDiv17Cb, useDiv20Cb, useDiv18Cb, useDiv21Cb, useDiv19Cb, useImage7Cb, useaboutCb, useserviceCb, useprojCb, useblogCb, usebookCb, useImage8Cb, useh1_headerCb, useh1_div2Cb, useh1_div3Cb, usedetail_txtCb, useTextBox21Cb, usebook_btnCb, usedwn_cvCb, usearrowCb, useImage9Cb, useispsum1Cb, useipsum2Cb, useipsum4Cb, useipsum3Cb, useTextBox23Cb, useheader_txtCb, useTextBox25Cb, useTextBox26Cb, useicon1Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useicon2Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useicon3Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const navbar_fxbProps = useStore((state)=>state["Home"]["navbar_fxb"]);
const navbar_fxbIoProps = useIoStore((state)=>state["Home"]["navbar_fxb"]);
const navbar_fxbCb = usenavbar_fxbCb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const main_fxbProps = useStore((state)=>state["Home"]["main_fxb"]);
const main_fxbIoProps = useIoStore((state)=>state["Home"]["main_fxb"]);
const main_fxbCb = usemain_fxbCb()
const text_FlexProps = useStore((state)=>state["Home"]["text_Flex"]);
const text_FlexIoProps = useIoStore((state)=>state["Home"]["text_Flex"]);
const text_FlexCb = usetext_FlexCb()
const h1_divProps = useStore((state)=>state["Home"]["h1_div"]);
const h1_divIoProps = useIoStore((state)=>state["Home"]["h1_div"]);
const h1_divCb = useh1_divCb()
const detail_holderProps = useStore((state)=>state["Home"]["detail_holder"]);
const detail_holderIoProps = useIoStore((state)=>state["Home"]["detail_holder"]);
const detail_holderCb = usedetail_holderCb()
const btnAndText_flxProps = useStore((state)=>state["Home"]["btnAndText_flx"]);
const btnAndText_flxIoProps = useIoStore((state)=>state["Home"]["btnAndText_flx"]);
const btnAndText_flxCb = usebtnAndText_flxCb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const img_FlexProps = useStore((state)=>state["Home"]["img_Flex"]);
const img_FlexIoProps = useIoStore((state)=>state["Home"]["img_Flex"]);
const img_FlexCb = useimg_FlexCb()
const trusted_flxProps = useStore((state)=>state["Home"]["trusted_flx"]);
const trusted_flxIoProps = useIoStore((state)=>state["Home"]["trusted_flx"]);
const trusted_flxCb = usetrusted_flxCb()
const trusted_divProps = useStore((state)=>state["Home"]["trusted_div"]);
const trusted_divIoProps = useIoStore((state)=>state["Home"]["trusted_div"]);
const trusted_divCb = usetrusted_divCb()
const trusted_logo_flxProps = useStore((state)=>state["Home"]["trusted_logo_flx"]);
const trusted_logo_flxIoProps = useIoStore((state)=>state["Home"]["trusted_logo_flx"]);
const trusted_logo_flxCb = usetrusted_logo_flxCb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const services_flxProps = useStore((state)=>state["Home"]["services_flx"]);
const services_flxIoProps = useIoStore((state)=>state["Home"]["services_flx"]);
const services_flxCb = useservices_flxCb()
const header_holderProps = useStore((state)=>state["Home"]["header_holder"]);
const header_holderIoProps = useIoStore((state)=>state["Home"]["header_holder"]);
const header_holderCb = useheader_holderCb()
const service_headerProps = useStore((state)=>state["Home"]["service_header"]);
const service_headerIoProps = useIoStore((state)=>state["Home"]["service_header"]);
const service_headerCb = useservice_headerCb()
const title_divProps = useStore((state)=>state["Home"]["title_div"]);
const title_divIoProps = useIoStore((state)=>state["Home"]["title_div"]);
const title_divCb = usetitle_divCb()
const container_flxProps = useStore((state)=>state["Home"]["container_flx"]);
const container_flxIoProps = useIoStore((state)=>state["Home"]["container_flx"]);
const container_flxCb = usecontainer_flxCb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const serviceProps = useStore((state)=>state["Home"]["service"]);
const serviceIoProps = useIoStore((state)=>state["Home"]["service"]);
const serviceCb = useserviceCb()
const projProps = useStore((state)=>state["Home"]["proj"]);
const projIoProps = useIoStore((state)=>state["Home"]["proj"]);
const projCb = useprojCb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const bookProps = useStore((state)=>state["Home"]["book"]);
const bookIoProps = useIoStore((state)=>state["Home"]["book"]);
const bookCb = usebookCb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const h1_headerProps = useStore((state)=>state["Home"]["h1_header"]);
const h1_headerIoProps = useIoStore((state)=>state["Home"]["h1_header"]);
const h1_headerCb = useh1_headerCb()
const h1_div2Props = useStore((state)=>state["Home"]["h1_div2"]);
const h1_div2IoProps = useIoStore((state)=>state["Home"]["h1_div2"]);
const h1_div2Cb = useh1_div2Cb()
const h1_div3Props = useStore((state)=>state["Home"]["h1_div3"]);
const h1_div3IoProps = useIoStore((state)=>state["Home"]["h1_div3"]);
const h1_div3Cb = useh1_div3Cb()
const detail_txtProps = useStore((state)=>state["Home"]["detail_txt"]);
const detail_txtIoProps = useIoStore((state)=>state["Home"]["detail_txt"]);
const detail_txtCb = usedetail_txtCb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const book_btnProps = useStore((state)=>state["Home"]["book_btn"]);
const book_btnIoProps = useIoStore((state)=>state["Home"]["book_btn"]);
const book_btnCb = usebook_btnCb()
const dwn_cvProps = useStore((state)=>state["Home"]["dwn_cv"]);
const dwn_cvIoProps = useIoStore((state)=>state["Home"]["dwn_cv"]);
const dwn_cvCb = usedwn_cvCb()
const arrowProps = useStore((state)=>state["Home"]["arrow"]);
const arrowIoProps = useIoStore((state)=>state["Home"]["arrow"]);
const arrowCb = usearrowCb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const ispsum1Props = useStore((state)=>state["Home"]["ispsum1"]);
const ispsum1IoProps = useIoStore((state)=>state["Home"]["ispsum1"]);
const ispsum1Cb = useispsum1Cb()
const ipsum2Props = useStore((state)=>state["Home"]["ipsum2"]);
const ipsum2IoProps = useIoStore((state)=>state["Home"]["ipsum2"]);
const ipsum2Cb = useipsum2Cb()
const ipsum4Props = useStore((state)=>state["Home"]["ipsum4"]);
const ipsum4IoProps = useIoStore((state)=>state["Home"]["ipsum4"]);
const ipsum4Cb = useipsum4Cb()
const ipsum3Props = useStore((state)=>state["Home"]["ipsum3"]);
const ipsum3IoProps = useIoStore((state)=>state["Home"]["ipsum3"]);
const ipsum3Cb = useipsum3Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const header_txtProps = useStore((state)=>state["Home"]["header_txt"]);
const header_txtIoProps = useIoStore((state)=>state["Home"]["header_txt"]);
const header_txtCb = useheader_txtCb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const icon1Props = useStore((state)=>state["Home"]["icon1"]);
const icon1IoProps = useIoStore((state)=>state["Home"]["icon1"]);
const icon1Cb = useicon1Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const icon2Props = useStore((state)=>state["Home"]["icon2"]);
const icon2IoProps = useIoStore((state)=>state["Home"]["icon2"]);
const icon2Cb = useicon2Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const icon3Props = useStore((state)=>state["Home"]["icon3"]);
const icon3IoProps = useIoStore((state)=>state["Home"]["icon3"]);
const icon3Cb = useicon3Cb()

  return (<>
  <Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex className="p-Home navbar_fxb bpt" {...navbar_fxbProps} {...navbar_fxbCb} {...navbar_fxbIoProps}>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<TextBox className="p-Home service bpt" {...serviceProps} {...serviceCb} {...serviceIoProps}/>
<TextBox className="p-Home proj bpt" {...projProps} {...projCb} {...projIoProps}/>
<TextBox className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}/>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<TextBox className="p-Home book bpt" {...bookProps} {...bookCb} {...bookIoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home main_fxb bpt" {...main_fxbProps} {...main_fxbCb} {...main_fxbIoProps}>
<Flex className="p-Home text_Flex bpt" {...text_FlexProps} {...text_FlexCb} {...text_FlexIoProps}>
<Div className="p-Home h1_div bpt" {...h1_divProps} {...h1_divCb} {...h1_divIoProps}>
<TextBox className="p-Home h1_header bpt" {...h1_headerProps} {...h1_headerCb} {...h1_headerIoProps}/>
<TextBox className="p-Home h1_div2 bpt" {...h1_div2Props} {...h1_div2Cb} {...h1_div2IoProps}/>
<TextBox className="p-Home h1_div3 bpt" {...h1_div3Props} {...h1_div3Cb} {...h1_div3IoProps}/>
<Div className="p-Home detail_holder bpt" {...detail_holderProps} {...detail_holderCb} {...detail_holderIoProps}>
<TextBox className="p-Home detail_txt bpt" {...detail_txtProps} {...detail_txtCb} {...detail_txtIoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
<Flex className="p-Home btnAndText_flx bpt" {...btnAndText_flxProps} {...btnAndText_flxCb} {...btnAndText_flxIoProps}>
<Button className="p-Home book_btn bpt" {...book_btnProps} {...book_btnCb} {...book_btnIoProps}/>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home dwn_cv bpt" {...dwn_cvProps} {...dwn_cvCb} {...dwn_cvIoProps}/>
<Image className="p-Home arrow bpt" {...arrowProps} {...arrowCb} {...arrowIoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home img_Flex bpt" {...img_FlexProps} {...img_FlexCb} {...img_FlexIoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home trusted_flx bpt" {...trusted_flxProps} {...trusted_flxCb} {...trusted_flxIoProps}>
<Div className="p-Home trusted_div bpt" {...trusted_divProps} {...trusted_divCb} {...trusted_divIoProps}>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex>
<Flex className="p-Home trusted_logo_flx bpt" {...trusted_logo_flxProps} {...trusted_logo_flxCb} {...trusted_logo_flxIoProps}>
<Image className="p-Home ispsum1 bpt" {...ispsum1Props} {...ispsum1Cb} {...ispsum1IoProps}/>
<Image className="p-Home ipsum2 bpt" {...ipsum2Props} {...ipsum2Cb} {...ipsum2IoProps}/>
<Image className="p-Home ipsum3 bpt" {...ipsum3Props} {...ipsum3Cb} {...ipsum3IoProps}/>
<Image className="p-Home ipsum4 bpt" {...ipsum4Props} {...ipsum4Cb} {...ipsum4IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home services_flx bpt" {...services_flxProps} {...services_flxCb} {...services_flxIoProps}>
<Div className="p-Home header_holder bpt" {...header_holderProps} {...header_holderCb} {...header_holderIoProps}>
<Flex className="p-Home service_header bpt" {...service_headerProps} {...service_headerCb} {...service_headerIoProps}>
<TextBox className="p-Home header_txt bpt" {...header_txtProps} {...header_txtCb} {...header_txtIoProps}/>
</Flex>
<Div className="p-Home title_div bpt" {...title_divProps} {...title_divCb} {...title_divIoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Div>
<Flex className="p-Home container_flx bpt" {...container_flxProps} {...container_flxCb} {...container_flxIoProps}>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image className="p-Home icon1 bpt" {...icon1Props} {...icon1Cb} {...icon1IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
</Div>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Image className="p-Home icon2 bpt" {...icon2Props} {...icon2Cb} {...icon2IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
</Div>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Image className="p-Home icon3 bpt" {...icon3Props} {...icon3Cb} {...icon3IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
  </>);
}
