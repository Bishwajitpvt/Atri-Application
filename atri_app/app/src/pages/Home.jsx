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
import { usenavbarCb, usenavbar_fxbCb, useFlex16Cb, useFlex17Cb, useFlex19Cb, usemain_fxbCb, usetext_FlexCb, useh1_divCb, usedetail_holderCb, usebtnAndText_flxCb, useFlex24Cb, useimg_FlexCb, usetrusted_flxCb, usetrusted_divCb, usetrusted_logo_flxCb, useFlex27Cb, useprojectHead_flexCb, usetxt_divCb, useDiv44Cb, usebtn_divCb, useservices_flxCb, useheader_holderCb, useservice_headerCb, usetitle_divCb, usecontainer_flxCb, usecont1_flxCb, useicon_divCb, usehead_divCb, usedesc_divCb, usebulletPoint_divCb, useFlex53Cb, useFlex59Cb, useFlex60Cb, usecont2_flxCb, useicon2_divCb, usehead2_divCb, usedesc2_divCb, usebulletPoint2_divCb, useFlex61Cb, useFlex62Cb, useFlex63Cb, usecont3_flxCb, useicon3_divCb, usehead3_divCb, usedesc3_divCb, usebulletPoint3_divCb, useFlex65Cb, useFlex67Cb, useFlex69Cb, useslider_divCb, useslider_flexCb, useDiv63Cb, useProjtxt_divCb, useFlex82Cb, useDiv64Cb, useDiv67Cb, useFlex83Cb, useDiv65Cb, useDiv68Cb, useFlex84Cb, usebtn_flxCb, useFlex89Cb, useFlex90Cb, useblog_holder_divCb, useblog_flxCb, useleft_divCb, useFlex94Cb, useright_divCb, usediv1Cb, useFlex95Cb, useFlex96Cb, usediv2Cb, useFlex97Cb, useFlex98Cb, usediv3Cb, useFlex99Cb, useFlex100Cb, usediv4Cb, useFlex102Cb, useFlex103Cb, usediv5Cb, useFlex104Cb, useFlex105Cb, useproduct_divCb, usetext_header_flxCb, useDiv82Cb, useDiv84Cb, useimg_divCb, useFlex109Cb, useDiv87Cb, usetestimonial_divCb, usetesti_flxCb, useDiv94Cb, useDiv95Cb, useFlex123Cb, useDiv96Cb, useFlex124Cb, useedu_and_work_flxCb, useleftew_divCb, useFlex126Cb, useDiv99Cb, useFlex127Cb, useFlex128Cb, useImage7Cb, useaboutCb, useserviceCb, useprojCb, useblogCb, usebookCb, useImage8Cb, useh1_headerCb, useh1_div2Cb, useh1_div3Cb, usedetail_txtCb, useTextBox21Cb, usebook_btnCb, usedwn_cvCb, usearrowCb, useImage9Cb, useispsum1Cb, useipsum2Cb, useipsum4Cb, useipsum3Cb, useTextBox23Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useButton4Cb, useheader_txtCb, useTextBox25Cb, useTextBox26Cb, useicon1Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useTextBox81Cb, useTextBox82Cb, useTextBox83Cb, useTextBox84Cb, useImage24Cb, useTextBox85Cb, useTextBox86Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useicon3Cb, useTextBox95Cb, useTextBox96Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useImage43Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useImage44Cb, useImage45Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useImage46Cb, useImage47Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useImage48Cb, useButton5Cb, useButton6Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useImage49Cb, useTextBox123Cb, useTextBox124Cb, useTextBox129Cb, useTextBox125Cb, useImage50Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useTextBox130Cb, useTextBox134Cb, useTextBox136Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox135Cb, useImage51Cb, useTextBox143Cb, useTextBox144Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useTextBox145Cb, useImage52Cb, useTextBox147Cb, useTextBox152Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useImage53Cb, useTextBox153Cb, useTextBox158Cb, useTextBox154Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useImage54Cb, useTextBox159Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useImage59Cb, useImage60Cb, useImage61Cb, useImage62Cb, useTextBox173Cb, useTextBox174Cb, useImage66Cb, useImage67Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useButton7Cb, useButton8Cb, userightew_divCb, useTextBox185Cb, useImage68Cb, useTextBox181Cb, useTextBox182Cb, useImage69Cb, useTextBox183Cb, useTextBox184Cb } from "../page-cbs/Home";
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
const btn_flxProps = useStore((state)=>state["Home"]["btn_flx"]);
const btn_flxIoProps = useIoStore((state)=>state["Home"]["btn_flx"]);
const btn_flxCb = usebtn_flxCb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const blog_holder_divProps = useStore((state)=>state["Home"]["blog_holder_div"]);
const blog_holder_divIoProps = useIoStore((state)=>state["Home"]["blog_holder_div"]);
const blog_holder_divCb = useblog_holder_divCb()
const blog_flxProps = useStore((state)=>state["Home"]["blog_flx"]);
const blog_flxIoProps = useIoStore((state)=>state["Home"]["blog_flx"]);
const blog_flxCb = useblog_flxCb()
const left_divProps = useStore((state)=>state["Home"]["left_div"]);
const left_divIoProps = useIoStore((state)=>state["Home"]["left_div"]);
const left_divCb = useleft_divCb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const right_divProps = useStore((state)=>state["Home"]["right_div"]);
const right_divIoProps = useIoStore((state)=>state["Home"]["right_div"]);
const right_divCb = useright_divCb()
const div1Props = useStore((state)=>state["Home"]["div1"]);
const div1IoProps = useIoStore((state)=>state["Home"]["div1"]);
const div1Cb = usediv1Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const div2Props = useStore((state)=>state["Home"]["div2"]);
const div2IoProps = useIoStore((state)=>state["Home"]["div2"]);
const div2Cb = usediv2Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const div3Props = useStore((state)=>state["Home"]["div3"]);
const div3IoProps = useIoStore((state)=>state["Home"]["div3"]);
const div3Cb = usediv3Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const div4Props = useStore((state)=>state["Home"]["div4"]);
const div4IoProps = useIoStore((state)=>state["Home"]["div4"]);
const div4Cb = usediv4Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const div5Props = useStore((state)=>state["Home"]["div5"]);
const div5IoProps = useIoStore((state)=>state["Home"]["div5"]);
const div5Cb = usediv5Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const product_divProps = useStore((state)=>state["Home"]["product_div"]);
const product_divIoProps = useIoStore((state)=>state["Home"]["product_div"]);
const product_divCb = useproduct_divCb()
const text_header_flxProps = useStore((state)=>state["Home"]["text_header_flx"]);
const text_header_flxIoProps = useIoStore((state)=>state["Home"]["text_header_flx"]);
const text_header_flxCb = usetext_header_flxCb()
const Div82Props = useStore((state)=>state["Home"]["Div82"]);
const Div82IoProps = useIoStore((state)=>state["Home"]["Div82"]);
const Div82Cb = useDiv82Cb()
const Div84Props = useStore((state)=>state["Home"]["Div84"]);
const Div84IoProps = useIoStore((state)=>state["Home"]["Div84"]);
const Div84Cb = useDiv84Cb()
const img_divProps = useStore((state)=>state["Home"]["img_div"]);
const img_divIoProps = useIoStore((state)=>state["Home"]["img_div"]);
const img_divCb = useimg_divCb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Div87Props = useStore((state)=>state["Home"]["Div87"]);
const Div87IoProps = useIoStore((state)=>state["Home"]["Div87"]);
const Div87Cb = useDiv87Cb()
const testimonial_divProps = useStore((state)=>state["Home"]["testimonial_div"]);
const testimonial_divIoProps = useIoStore((state)=>state["Home"]["testimonial_div"]);
const testimonial_divCb = usetestimonial_divCb()
const testi_flxProps = useStore((state)=>state["Home"]["testi_flx"]);
const testi_flxIoProps = useIoStore((state)=>state["Home"]["testi_flx"]);
const testi_flxCb = usetesti_flxCb()
const Div94Props = useStore((state)=>state["Home"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["Home"]["Div94"]);
const Div94Cb = useDiv94Cb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const edu_and_work_flxProps = useStore((state)=>state["Home"]["edu_and_work_flx"]);
const edu_and_work_flxIoProps = useIoStore((state)=>state["Home"]["edu_and_work_flx"]);
const edu_and_work_flxCb = useedu_and_work_flxCb()
const leftew_divProps = useStore((state)=>state["Home"]["leftew_div"]);
const leftew_divIoProps = useIoStore((state)=>state["Home"]["leftew_div"]);
const leftew_divCb = useleftew_divCb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Div99Props = useStore((state)=>state["Home"]["Div99"]);
const Div99IoProps = useIoStore((state)=>state["Home"]["Div99"]);
const Div99Cb = useDiv99Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
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
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox152Props = useStore((state)=>state["Home"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Home"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox153Props = useStore((state)=>state["Home"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox154Props = useStore((state)=>state["Home"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const rightew_divProps = useStore((state)=>state["Home"]["rightew_div"]);
const rightew_divIoProps = useIoStore((state)=>state["Home"]["rightew_div"]);
const rightew_divCb = userightew_divCb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()

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
<Flex className="p-Home btn_flx bpt" {...btn_flxProps} {...btn_flxCb} {...btn_flxIoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_holder_div bpt" {...blog_holder_divProps} {...blog_holder_divCb} {...blog_holder_divIoProps}>
<Flex className="p-Home blog_flx bpt" {...blog_flxProps} {...blog_flxCb} {...blog_flxIoProps}>
<Div className="p-Home left_div bpt" {...left_divProps} {...left_divCb} {...left_divIoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
</Div>
<Div className="p-Home right_div bpt" {...right_divProps} {...right_divCb} {...right_divIoProps}>
<Div className="p-Home div1 bpt" {...div1Props} {...div1Cb} {...div1IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Flex>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Div>
<Div className="p-Home div2 bpt" {...div2Props} {...div2Cb} {...div2IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
</Flex>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
</Div>
<Div className="p-Home div3 bpt" {...div3Props} {...div3Cb} {...div3IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Div>
<Div className="p-Home div4 bpt" {...div4Props} {...div4Cb} {...div4IoProps}>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
<TextBox className="p-Home TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Div>
<Div className="p-Home div5 bpt" {...div5Props} {...div5Cb} {...div5IoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox className="p-Home TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<TextBox className="p-Home TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home product_div bpt" {...product_divProps} {...product_divCb} {...product_divIoProps}>
<Flex className="p-Home text_header_flx bpt" {...text_header_flxProps} {...text_header_flxCb} {...text_header_flxIoProps}>
<Div className="p-Home Div82 bpt" {...Div82Props} {...Div82Cb} {...Div82IoProps}>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Div>
<Div className="p-Home Div84 bpt" {...Div84Props} {...Div84Cb} {...Div84IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Div>
</Flex>
<Div className="p-Home img_div bpt" {...img_divProps} {...img_divCb} {...img_divIoProps}>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Div className="p-Home Div87 bpt" {...Div87Props} {...Div87Cb} {...Div87IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Flex className="p-Home edu_and_work_flx bpt" {...edu_and_work_flxProps} {...edu_and_work_flxCb} {...edu_and_work_flxIoProps}>
<Div className="p-Home leftew_div bpt" {...leftew_divProps} {...leftew_divCb} {...leftew_divIoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex>
<Div className="p-Home Div99 bpt" {...Div99Props} {...Div99Cb} {...Div99IoProps}>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
</Flex>
</Div>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
</Div>
<Div className="p-Home rightew_div bpt" {...rightew_divProps} {...rightew_divCb} {...rightew_divIoProps}/>
</Flex>
<Div className="p-Home testimonial_div bpt" {...testimonial_divProps} {...testimonial_divCb} {...testimonial_divIoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Div>
<Flex className="p-Home testi_flx bpt" {...testi_flxProps} {...testi_flxCb} {...testi_flxIoProps}>
<Div className="p-Home Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Div>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Div className="p-Home Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Div>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
  </>);
}
