import ActorSheet4e from "./actor-sheet.js"

export default class ActorSheet4eNPC extends ActorSheet4e {



	/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: ["dnd4eBeta", "sheet", "actor", "NPC"],
			width: 600,
			height: 680
		});
	}
	/** @override */
	get template() {
		return `systems/dnd4eBeta/templates/npc-sheet.html`;
	}

}