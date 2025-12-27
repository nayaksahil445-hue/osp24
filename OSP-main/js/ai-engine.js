function aiDecision(user) {
  return AI_SCHEMES.filter(s =>
    user.age >= s.minAge &&
    user.income <= s.maxIncome &&
    (s.caste === "ALL" || s.caste === user.caste) &&
    s.occupation === user.occupation
  );
}