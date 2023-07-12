import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";

//got rid of sidebar component
const Sidebar = () => {
	return (
		<div className=" w-36 pt-4 bg-zinc-600">
			<Menu className=" h-screen text-white bg-zinc-600">
				<div>
					<div className="flex items-center p-2 text-white bg-zinc-600 hover:text-opacity-60 md:hover:border md:hover:border-teal-800 md:hover:bg-teal-800">
						<AiFillHome className="w-7 h-7 mr-2" />
						<a href="www.yahoo.com">Home</a>
					</div>
				</div>
				<div>
					<div className="flex items-center p-2 text-white bg-zinc-600 hover:text-opacity-60 md:hover:border md:hover:border-teal-800 md:hover:bg-teal-800">
						<BsPersonFillAdd className="w-7 h-7 mr-2" />
						<a>Add User</a>
					</div>
				</div>
			</Menu>
		</div>
	);
};
export default Sidebar;
