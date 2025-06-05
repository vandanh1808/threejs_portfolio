import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-sapce gap-3">
				<p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
					Hi, I am Danh <span className="waving-hand">✌️</span>
					<p className="hero_tag text-gray_gradient">
						Building Products & Brands
					</p>
				</p>
			</div>
			<d className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HackerRoom
							position={sizes.deskPosition}
							rotation={[0.4, -3.2, 0]}
							scale={sizes.deskScale}
						/>
						<group>
							<Target position={sizes.targetPosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight
							position={[10, 10, 10]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</d>
		</section>
	);
};

export default Hero;
