//--////////////--------------------------------------o
import { Filters } from "../Filters/Filters.js";
import { Clk } from "../test_clicks/test_clicks.js";
import { LblInpBut } from "../LblInpBut/LblInpBut.js";
import { SocialIcons } from "../hextabs/Tabs.js"

import { Component, render } from "preact";
const React = { Component };

//---------////////////--------------------------------------o
export var CardFilters = (p) => (
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        { ttl: "No", ttl2: "Filter", cnt: 200, click: Clk.filtCardNo },
        { ttl: "Pinned", ttl2: "By You", cnt: 48, click: Clk.filtCardPins },
        {
          ttl: "Tanjo Bot",
          ttl2: "Recommends",
          cnt: 152,
          click: Clk.filtCardBots
        },
        {
          ttl: "Pinned By",
          ttl2: "Collaborators",
          cnt: 0,
          click: Clk.filtCardCollab
        }
      ]}
      initIdx="1"
    />
  </div>
);
//---------///////////--------------------------------------o
export var ActFilters = (p) => (
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        { ttl: "Summary", cnt: 200, click: Clk.filtActSummary },
        { ttl: "Bots", cnt: 48, click: Clk.filtActBots },
        { ttl: "Humans", cnt: 152, click: Clk.filtActHumans },
        { ttl: "Chat", cnt: 0, click: Clk.filtActChat },
        { ttl: "Me", cnt: 0, click: Clk.filtActMe }
      ]}
      initIdx="1"
      short
    />
  </div>
);

//---/////////---------------------------------------------o
export var SharePage = () => (
    <div className="share-page">
      <LblInpBut
        lbl="Shareable board link"
        msg="Copied To Clipboard"
        btn="COPY LINK"
        placeholder=" "
        inputTxt="http://localhost:3000/boards/dD"
        cls=""
      />
      <LblInpBut
        lbl="Invite collaborators"
        msg="Sending invitations..."
        btn="SEND"
        placeholder="Email addresses separated by commas"
        inputTxt=""
        cls=""
      />
      <SocialIcons
        cls="big-icons"
        icons="lfts"
        cls_i="buttony"
        cls_s="cornered"
        clicks={[
          Clk.ShareLinkedIn,
          Clk.ShareFacebook,
          Clk.ShareTwitter,
          Clk.ShareSlack
        ]}
      />
    </div>
  );

