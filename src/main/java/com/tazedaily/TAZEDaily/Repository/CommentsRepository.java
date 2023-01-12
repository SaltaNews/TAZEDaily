package com.tazedaily.TAZEDaily.Repository;

import com.tazedaily.TAZEDaily.Domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends JpaRepository<Comment, Long> {
}
