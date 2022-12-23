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
import { usenavbarCb, usenavbar_fxbCb, useFlex16Cb, useFlex17Cb, useFlex19Cb, usemain_fxbCb, usetext_FlexCb, useh1_divCb, usedetail_holderCb, usebtnAndText_flxCb, useFlex24Cb, useimg_FlexCb, useImage7Cb, useaboutCb, useserviceCb, useprojCb, useblogCb, usebookCb, useImage8Cb, useh1_headerCb, useh1_div2Cb, useh1_div3Cb, usedetail_txtCb, useTextBox21Cb, usebook_btnCb, usedwn_cvCb, usearrowCb, useImage9Cb } from "../page-cbs/Home";
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
  </>);
}
