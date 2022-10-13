import { joinUrl } from '@/utils/url';

export const getRepoUrl = () => {
  return 'https://github.com/Tyrrrz/SpellingUkraine';
};

export const getRepoCommitUrl = (commit: string) => {
  return joinUrl(getRepoUrl(), 'commit', commit);
};
