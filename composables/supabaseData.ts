export function usePracticeTests(testType) {
  const practiceTests = ref([]);

  const fetchPracticeTests = async () => {
    const { data, error } = await useSupabaseClient()
      .from("practices")
      .select("practice_id, practice_name")
      .eq("practice_type", `${testType.value} Full Length`);

    if (error) {
      console.error("Error fetching practice tests:", error);
    } else {
      practiceTests.value = data;
    }
  };

  watch(testType, fetchPracticeTests, { immediate: true });

  return { practiceTests };
}
