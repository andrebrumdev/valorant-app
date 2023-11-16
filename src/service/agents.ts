const HOST = "https://valorant-api.com/v1";

const language = "pt-BR";
export const agentsRequest = {
  url: `${HOST}/agents`,
  params: {
    language,
    isPlayableCharacter: true,
  },
};

export function agentRequest(uuid:string) {
  return {
    url: `${HOST}/agents/${uuid}`,
    params: {
      language,
      isPlayableCharacter: true,
    },
  };
}
