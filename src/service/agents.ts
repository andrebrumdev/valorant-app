import agents from "../database/agents.json";
// const HOST = "https://valorant-api.com/v1";

export function getAgents(): Agent[] {
  return agents as Agent[];
}

export function getAgent(uuid?: string): Agent | null {
  return agents.find(agent=>agent.uuid === uuid) as Agent;
}
