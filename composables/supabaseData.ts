export function usePracticeTests(testType) {
  const { data: practiceTests } = useAsyncState(async () => {
    const { data, error } = await useSupabaseClient()
      .from("practices")
      .select("practice_id, practice_name")
      .eq("practice_type", `${testType.value} Full Length`);

    if (error) {
      console.error("Error fetching practice tests:", error);
      return [];
    }
    return data;
  }, []);

  watch(testType, () => practiceTests.execute(), { immediate: true });

  return { practiceTests };
}
