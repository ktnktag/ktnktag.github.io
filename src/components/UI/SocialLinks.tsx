import { default as In } from "../../assets/svg/socials/In.svg?react";
import { default as Medium } from "../../assets/svg/socials/Medium.svg?react";
import { default as Vec } from "../../assets/svg/socials/Vec.svg?react";
import { default as Be } from "../../assets/svg/socials/Be.svg?react";
import { default as Figma } from "../../assets/svg/socials/Figma.svg?react";

import LinkButton from "../common/button/link-button/LinkButton";

export default function SocialLinks() {
    return <nav>
        <ul className="flex-row gap-16">
            <li>
                <LinkButton
                    small
                    path="https://www.linkedin.com/in/kto-nekto/"
                >
                    <In />
                </LinkButton>
            </li>
            <li>
                <LinkButton small path="https://medium.com/@kto.nekto">
                    <Medium />
                </LinkButton>
            </li>
            <li>
                <LinkButton small path="https://dribbble.com/kto_nekto">
                    <Vec />
                </LinkButton>
            </li>
            <li>
                <LinkButton small path="https://www.behance.net/kto_nekto">
                    <Be />
                </LinkButton>
            </li>
            <li>
                <LinkButton small path="https://www.figma.com/@kto_nekto">
                    <Figma />
                </LinkButton>
            </li>
        </ul>
    </nav>
}