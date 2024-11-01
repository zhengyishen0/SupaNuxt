export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      practice_attempts: {
        Row: {
          attempt_id: number
          completed_time: string | null
          practice_id: number | null
          session_id: number | null
          session_timeout: number | null
          start_time: string | null
          user_id: string | null
        }
        Insert: {
          attempt_id?: number
          completed_time?: string | null
          practice_id?: number | null
          session_id?: number | null
          session_timeout?: number | null
          start_time?: string | null
          user_id?: string | null
        }
        Update: {
          attempt_id?: number
          completed_time?: string | null
          practice_id?: number | null
          session_id?: number | null
          session_timeout?: number | null
          start_time?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "practice_attempts_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "practices"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "practice_attempts_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "user_practice_attempts"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "practice_attempts_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "practice_attempts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      practices: {
        Row: {
          practice_id: number
          practice_name: string | null
          practice_type:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
        }
        Insert: {
          practice_id?: number
          practice_name?: string | null
          practice_type?:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
        }
        Update: {
          practice_id?: number
          practice_name?: string | null
          practice_type?:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
        }
        Relationships: []
      }
      question_progress: {
        Row: {
          attempt_id: number
          bookmarked: boolean | null
          is_correct: boolean | null
          question_id: number
          user_answer: string | null
        }
        Insert: {
          attempt_id: number
          bookmarked?: boolean | null
          is_correct?: boolean | null
          question_id: number
          user_answer?: string | null
        }
        Update: {
          attempt_id?: number
          bookmarked?: boolean | null
          is_correct?: boolean | null
          question_id?: number
          user_answer?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "practice_attempts"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "user_practice_attempts"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "user_practice_review"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "question_progress_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["question_id"]
          },
          {
            foreignKeyName: "question_progress_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "user_question_progress"
            referencedColumns: ["question_id"]
          },
        ]
      }
      questions: {
        Row: {
          correct_answer: string | null
          option_a: string | null
          option_b: string | null
          option_c: string | null
          option_d: string | null
          practice_id: number | null
          question_context: string | null
          question_id: number
          question_order: number | null
          question_text: string | null
          question_type:
            | Database["public"]["Enums"]["question_type_enum"]
            | null
          session_id: number | null
        }
        Insert: {
          correct_answer?: string | null
          option_a?: string | null
          option_b?: string | null
          option_c?: string | null
          option_d?: string | null
          practice_id?: number | null
          question_context?: string | null
          question_id?: number
          question_order?: number | null
          question_text?: string | null
          question_type?:
            | Database["public"]["Enums"]["question_type_enum"]
            | null
          session_id?: number | null
        }
        Update: {
          correct_answer?: string | null
          option_a?: string | null
          option_b?: string | null
          option_c?: string | null
          option_d?: string | null
          practice_id?: number | null
          question_context?: string | null
          question_id?: number
          question_order?: number | null
          question_text?: string | null
          question_type?:
            | Database["public"]["Enums"]["question_type_enum"]
            | null
          session_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "practices"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "questions_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "user_practice_attempts"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "questions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      sessions: {
        Row: {
          is_math: boolean | null
          practice_type:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
          session_id: number
          session_name: string | null
          session_order: number | null
          timeout_unit_sec: number | null
        }
        Insert: {
          is_math?: boolean | null
          practice_type?:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
          session_id?: number
          session_name?: string | null
          session_order?: number | null
          timeout_unit_sec?: number | null
        }
        Update: {
          is_math?: boolean | null
          practice_type?:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
          session_id?: number
          session_name?: string | null
          session_order?: number | null
          timeout_unit_sec?: number | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          password: string
          user_id: string
          username: string
        }
        Insert: {
          email: string
          password: string
          user_id?: string
          username: string
        }
        Update: {
          email?: string
          password?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      user_practice_attempts: {
        Row: {
          attempt_id: number | null
          completed_time: string | null
          practice_id: number | null
          practice_name: string | null
          practice_type:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
          session_id: number | null
          session_timeout: number | null
          start_time: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "practice_attempts_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "practice_attempts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_practice_review: {
        Row: {
          attempt_id: number | null
          completed_time: string | null
          correct_answer: string | null
          is_correct: boolean | null
          is_math: boolean | null
          option_a: string | null
          option_b: string | null
          option_c: string | null
          option_d: string | null
          practice_name: string | null
          practice_type:
            | Database["public"]["Enums"]["practice_type_enum"]
            | null
          question_context: string | null
          question_order: number | null
          question_text: string | null
          question_type:
            | Database["public"]["Enums"]["question_type_enum"]
            | null
          session_name: string | null
          session_order: number | null
          user_answer: string | null
        }
        Relationships: []
      }
      user_question_progress: {
        Row: {
          attempt_id: number | null
          bookmarked: boolean | null
          correct_answer: string | null
          is_correct: boolean | null
          option_a: string | null
          option_b: string | null
          option_c: string | null
          option_d: string | null
          practice_id: number | null
          question_context: string | null
          question_id: number | null
          question_order: number | null
          question_text: string | null
          question_type:
            | Database["public"]["Enums"]["question_type_enum"]
            | null
          session_id: number | null
          user_answer: string | null
        }
        Relationships: [
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "practice_attempts"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "user_practice_attempts"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "question_progress_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "user_practice_review"
            referencedColumns: ["attempt_id"]
          },
          {
            foreignKeyName: "questions_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "practices"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "questions_practice_id_fkey"
            columns: ["practice_id"]
            isOneToOne: false
            referencedRelation: "user_practice_attempts"
            referencedColumns: ["practice_id"]
          },
          {
            foreignKeyName: "questions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
    }
    Functions: {
      get_user_question_progress: {
        Args: {
          p_attempt_id: number
          p_session_id: number
        }
        Returns: {
          practice_id: number
          session_id: number
          question_id: number
          question_context: string
          question_type: Database["public"]["Enums"]["question_type_enum"]
          question_text: string
          correct_answer: string
          question_order: number
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          attempt_id: number
          bookmarked: boolean
          user_answer: string
          is_correct: boolean
        }[]
      }
    }
    Enums: {
      practice_type_enum: "SAT Full Length" | "SAT Test Preview" | "SAT Essay"
      question_type_enum:
        | "Fill-In"
        | "Essay"
        | "Single Choice"
        | "Multiple Choice"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
