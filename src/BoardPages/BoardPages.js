//---------//////////////--------------------------------------o
import "./BoardPages.scss";
import { Filters } from "../Filters/Filters.js";
import { LblInpBtn } from "../LblInpBtn/LblInpBtn.js";
import { SocialIcons } from "../Tabs/Tabs.js"
//import { Component } from "preact";
//---------////////////--------------------------------------o
export var CardPage = (p) => (
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        {ttl: "No",        ttl2: "Filter",        cnt: 200, click: p.clicks.filtCardNo },
        {ttl: "Pinned",    ttl2: "By You",        cnt: 48,  click: p.clicks.filtCardPins},
        {ttl: "Bot",       ttl2: "Recommended",   cnt: 152, click: p.clicks.filtCardBots},
        {ttl: "Pinned By", ttl2: "Collaborators", cnt: 0,   click: p.clicks.filtCardCollab}
      ]}
      initIdx="1"
    />
  </div>
);
//---------///////////--------------------------------------o
export var ActPage = (p) => (
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        { ttl: "Summary", cnt: 200, click: p.clicks.filtActSummary },
        { ttl: "Bots", cnt: 48, click: p.clicks.filtActBots },
        { ttl: "Humans", cnt: 152, click: p.clicks.filtActHumans },
        { ttl: "Chat", cnt: 0, click: p.clicks.filtActChat },
        { ttl: "Me", cnt: 0, click: p.clicks.filtActMe }
      ]}
      initIdx="1"
      short
    />
  </div>
);

//---/////////---------------------------------------------o
export var SharePage = (p) => (
    <div className="share-page">
      <LblInpBtn
        lbl="Shareable board link"
        msg="Copied To Clipboard"
        btn="COPY LINK"
        placeholder=" "
        inputTxt="http://localhost:3000/boards/dD"
        cls=""
        click={p.clicks.copyLink}
      />
      <LblInpBtn
        lbl="Invite collaborators"
        msg="Sending invitations..."
        btn="SEND"
        placeholder="Email addresses separated by commas"
        inputTxt=""
        cls=""
        click={p.clicks.sendShare}
      />
      <SocialIcons
        cls="big-icons"
        icons="lfts"
        cls_i="buttony"
        cls_s="cornered"
        clicks={[
          p.clicks.ShareLinkedIn,
          p.clicks.ShareFacebook,
          p.clicks.ShareTwitter,
          p.clicks.ShareSlack
        ]}
      />
    </div>
  );

