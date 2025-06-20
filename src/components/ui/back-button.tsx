"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
	return (
		<Button
			onClick={(e) => {
				e.preventDefault();
				window.history.back();
			}}
			variant={"ghost"}
			className="text-secondary hover:text-primary flex items-center gap-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
				/>
			</svg>
			Back to Events
		</Button>
	);
};
