package com.tazedaily.TAZEDaily.Repository;

import com.tazedaily.TAZEDaily.Domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    public Authority findAuthorityByRole(String role);
}
