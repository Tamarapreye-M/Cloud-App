import React from "react";
import {
	CloudArrowUpIcon,
	CircleStackIcon,
	PaperAirplaneIcon,
	ServerIcon,
} from "@heroicons/react/24/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
	return (
		<div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
			<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
				<div>
					<p>Unique Sequencing & Production</p>
					<h1>Cloud Management</h1>
					<p>This is our tech brand</p>
					<button>Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
