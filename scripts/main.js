import { pairingsHTML } from "./Pairings.js";
import { celebritiesHTML } from "./CelebrityList.js";
import { childrenHTML } from "./Kids.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${childrenHTML()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${celebritiesHTML()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${pairingsHTML()}
    </article>
`;

mainContainer.innerHTML = applicationHTML;
