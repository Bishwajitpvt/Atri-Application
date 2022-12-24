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
import { usenavbarCb, usenavbar_fxbCb, useFlex16Cb, useFlex17Cb, useFlex19Cb, usemain_fxbCb, usetext_FlexCb, useh1_divCb, usedetail_holderCb, usebtnAndText_flxCb, useFlex24Cb, useimg_FlexCb, usetrusted_flxCb, usetrusted_divCb, usetrusted_logo_flxCb, useFlex27Cb, useprojectHead_flexCb, usetxt_divCb, useDiv44Cb, usebtn_divCb, useservices_flxCb, useheader_holderCb, useservice_headerCb, usetitle_divCb, usecontainer_flxCb, usecont1_flxCb, useicon_divCb, usehead_divCb, usedesc_divCb, usebulletPoint_divCb, useFlex53Cb, useFlex59Cb, useFlex60Cb, usecont2_flxCb, useicon2_divCb, usehead2_divCb, usedesc2_divCb, usebulletPoint2_divCb, useFlex61Cb, useFlex62Cb, useFlex63Cb, usecont3_flxCb, useicon3_divCb, usehead3_divCb, usedesc3_divCb, usebulletPoint3_divCb, useFlex65Cb, useFlex67Cb, useFlex69Cb, useslider_divCb, useslider_flexCb, useDiv63Cb, useProjtxt_divCb, useFlex82Cb, useDiv64Cb, useDiv67Cb, useFlex83Cb, useDiv65Cb, useDiv68Cb, useFlex84Cb, useImage7Cb, useaboutCb, useserviceCb, useprojCb, useblogCb, usebookCb, useImage8Cb, useh1_headerCb, useh1_div2Cb, useh1_div3Cb, usedetail_txtCb, useTextBox21Cb, usebook_btnCb, usedwn_cvCb, usearrowCb, useImage9Cb, useispsum1Cb, useipsum2Cb, useipsum4Cb, useipsum3Cb, useTextBox23Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useButton4Cb, useheader_txtCb, useTextBox25Cb, useTextBox26Cb, useicon1Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useTextBox81Cb, useTextBox82Cb, useTextBox83Cb, useTextBox84Cb, useImage24Cb, useTextBox85Cb, useTextBox86Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useicon3Cb, useTextBox95Cb, useTextBox96Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useImage43Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useImage44Cb, useImage45Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useImage46Cb, useImage47Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useImage48Cb } from "../page-cbs/Home";
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
const projectHead_flexProps = useStore((state)=>state["Home"]["projectHead_flex"]);
const projectHead_flexIoProps = useIoStore((state)=>state["Home"]["projectHead_flex"]);
const projectHead_flexCb = useprojectHead_flexCb()
const txt_divProps = useStore((state)=>state["Home"]["txt_div"]);
const txt_divIoProps = useIoStore((state)=>state["Home"]["txt_div"]);
const txt_divCb = usetxt_divCb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const btn_divProps = useStore((state)=>state["Home"]["btn_div"]);
const btn_divIoProps = useIoStore((state)=>state["Home"]["btn_div"]);
const btn_divCb = usebtn_divCb()
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
const cont1_flxProps = useStore((state)=>state["Home"]["cont1_flx"]);
const cont1_flxIoProps = useIoStore((state)=>state["Home"]["cont1_flx"]);
const cont1_flxCb = usecont1_flxCb()
const icon_divProps = useStore((state)=>state["Home"]["icon_div"]);
const icon_divIoProps = useIoStore((state)=>state["Home"]["icon_div"]);
const icon_divCb = useicon_divCb()
const head_divProps = useStore((state)=>state["Home"]["head_div"]);
const head_divIoProps = useIoStore((state)=>state["Home"]["head_div"]);
const head_divCb = usehead_divCb()
const desc_divProps = useStore((state)=>state["Home"]["desc_div"]);
const desc_divIoProps = useIoStore((state)=>state["Home"]["desc_div"]);
const desc_divCb = usedesc_divCb()
const bulletPoint_divProps = useStore((state)=>state["Home"]["bulletPoint_div"]);
const bulletPoint_divIoProps = useIoStore((state)=>state["Home"]["bulletPoint_div"]);
const bulletPoint_divCb = usebulletPoint_divCb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const cont2_flxProps = useStore((state)=>state["Home"]["cont2_flx"]);
const cont2_flxIoProps = useIoStore((state)=>state["Home"]["cont2_flx"]);
const cont2_flxCb = usecont2_flxCb()
const icon2_divProps = useStore((state)=>state["Home"]["icon2_div"]);
const icon2_divIoProps = useIoStore((state)=>state["Home"]["icon2_div"]);
const icon2_divCb = useicon2_divCb()
const head2_divProps = useStore((state)=>state["Home"]["head2_div"]);
const head2_divIoProps = useIoStore((state)=>state["Home"]["head2_div"]);
const head2_divCb = usehead2_divCb()
const desc2_divProps = useStore((state)=>state["Home"]["desc2_div"]);
const desc2_divIoProps = useIoStore((state)=>state["Home"]["desc2_div"]);
const desc2_divCb = usedesc2_divCb()
const bulletPoint2_divProps = useStore((state)=>state["Home"]["bulletPoint2_div"]);
const bulletPoint2_divIoProps = useIoStore((state)=>state["Home"]["bulletPoint2_div"]);
const bulletPoint2_divCb = usebulletPoint2_divCb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const cont3_flxProps = useStore((state)=>state["Home"]["cont3_flx"]);
const cont3_flxIoProps = useIoStore((state)=>state["Home"]["cont3_flx"]);
const cont3_flxCb = usecont3_flxCb()
const icon3_divProps = useStore((state)=>state["Home"]["icon3_div"]);
const icon3_divIoProps = useIoStore((state)=>state["Home"]["icon3_div"]);
const icon3_divCb = useicon3_divCb()
const head3_divProps = useStore((state)=>state["Home"]["head3_div"]);
const head3_divIoProps = useIoStore((state)=>state["Home"]["head3_div"]);
const head3_divCb = usehead3_divCb()
const desc3_divProps = useStore((state)=>state["Home"]["desc3_div"]);
const desc3_divIoProps = useIoStore((state)=>state["Home"]["desc3_div"]);
const desc3_divCb = usedesc3_divCb()
const bulletPoint3_divProps = useStore((state)=>state["Home"]["bulletPoint3_div"]);
const bulletPoint3_divIoProps = useIoStore((state)=>state["Home"]["bulletPoint3_div"]);
const bulletPoint3_divCb = usebulletPoint3_divCb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const slider_divProps = useStore((state)=>state["Home"]["slider_div"]);
const slider_divIoProps = useIoStore((state)=>state["Home"]["slider_div"]);
const slider_divCb = useslider_divCb()
const slider_flexProps = useStore((state)=>state["Home"]["slider_flex"]);
const slider_flexIoProps = useIoStore((state)=>state["Home"]["slider_flex"]);
const slider_flexCb = useslider_flexCb()
const Div63Props = useStore((state)=>state["Home"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Projtxt_divProps = useStore((state)=>state["Home"]["Projtxt_div"]);
const Projtxt_divIoProps = useIoStore((state)=>state["Home"]["Projtxt_div"]);
const Projtxt_divCb = useProjtxt_divCb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Div64Props = useStore((state)=>state["Home"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div68Props = useStore((state)=>state["Home"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Home"]["Div68"]);
const Div68Cb = useDiv68Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
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
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
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
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const icon3Props = useStore((state)=>state["Home"]["icon3"]);
const icon3IoProps = useIoStore((state)=>state["Home"]["icon3"]);
const icon3Cb = useicon3Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()

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
<Flex className="p-Home cont1_flx bpt" {...cont1_flxProps} {...cont1_flxCb} {...cont1_flxIoProps}>
<Div className="p-Home icon_div bpt" {...icon_divProps} {...icon_divCb} {...icon_divIoProps}>
<Image className="p-Home icon1 bpt" {...icon1Props} {...icon1Cb} {...icon1IoProps}/>
<Div className="p-Home head_div bpt" {...head_divProps} {...head_divCb} {...head_divIoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Div>
<Div className="p-Home desc_div bpt" {...desc_divProps} {...desc_divCb} {...desc_divIoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
<Div className="p-Home bulletPoint_div bpt" {...bulletPoint_divProps} {...bulletPoint_divCb} {...bulletPoint_divIoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
<Flex className="p-Home cont2_flx bpt" {...cont2_flxProps} {...cont2_flxCb} {...cont2_flxIoProps}>
<Div className="p-Home icon2_div bpt" {...icon2_divProps} {...icon2_divCb} {...icon2_divIoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Div className="p-Home head2_div bpt" {...head2_divProps} {...head2_divCb} {...head2_divIoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Div>
<Div className="p-Home desc2_div bpt" {...desc2_divProps} {...desc2_divCb} {...desc2_divIoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Div>
<Div className="p-Home bulletPoint2_div bpt" {...bulletPoint2_divProps} {...bulletPoint2_divCb} {...bulletPoint2_divIoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
<Flex className="p-Home cont3_flx bpt" {...cont3_flxProps} {...cont3_flxCb} {...cont3_flxIoProps}>
<Div className="p-Home icon3_div bpt" {...icon3_divProps} {...icon3_divCb} {...icon3_divIoProps}>
<Image className="p-Home icon3 bpt" {...icon3Props} {...icon3Cb} {...icon3IoProps}/>
<Div className="p-Home head3_div bpt" {...head3_divProps} {...head3_divCb} {...head3_divIoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Div>
<Div className="p-Home desc3_div bpt" {...desc3_divProps} {...desc3_divCb} {...desc3_divIoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Div>
<Div className="p-Home bulletPoint3_div bpt" {...bulletPoint3_divProps} {...bulletPoint3_divCb} {...bulletPoint3_divIoProps}>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home projectHead_flex bpt" {...projectHead_flexProps} {...projectHead_flexCb} {...projectHead_flexIoProps}>
<Div className="p-Home txt_div bpt" {...txt_divProps} {...txt_divCb} {...txt_divIoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Div>
</Div>
<Div className="p-Home btn_div bpt" {...btn_divProps} {...btn_divCb} {...btn_divIoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Div>
</Flex>
<Div className="p-Home slider_div bpt" {...slider_divProps} {...slider_divCb} {...slider_divIoProps}>
<Flex className="p-Home slider_flex bpt" {...slider_flexProps} {...slider_flexCb} {...slider_flexIoProps}>
<Div className="p-Home Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Div className="p-Home Projtxt_div bpt" {...Projtxt_divProps} {...Projtxt_divCb} {...Projtxt_divIoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Flex className="p-Home Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Div className="p-Home Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
</Div>
  </>);
}
