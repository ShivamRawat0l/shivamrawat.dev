import type { IconType } from 'react-icons';
import { FaCode, FaMapMarkedAlt } from 'react-icons/fa';
import {
	SiCanvas,
	SiFirebase,
	SiGithub,
	SiGraphql,
	SiJavascript,
	SiKotlin,
	SiNodedotjs,
	SiNpm,
	SiReact,
	SiSocketdotio,
	SiSwift,
	SiTwilio,
	SiTypescript,
	SiXcode,
} from 'react-icons/si';

const iconMap: Record<string, IconType> = {
	JavaScript: SiJavascript,
	TypeScript: SiTypescript,
	'Node.js': SiNodedotjs,
	Swift: SiSwift,
	'React Native': SiReact,
	'React.js': SiReact,
	GraphQL: SiGraphql,
	Twilio: SiTwilio,
	'Socket.IO': SiSocketdotio,
	Xcode: SiXcode,
	UIKit: SiXcode,
	SwiftUI: SiSwift,
	SSE: SiNodedotjs,
	Maps: FaMapMarkedAlt,
	Notifications: SiFirebase,
	Testing: FaCode,
	'Canvas API': SiCanvas,
	'UI Design': FaCode,
	'Mobile UX': FaCode,
	Kotlin: SiKotlin,
	GitHub: SiGithub,
	npm: SiNpm,
};

export function getTechIcon(name: string): IconType {
	return iconMap[name] ?? FaCode;
}
