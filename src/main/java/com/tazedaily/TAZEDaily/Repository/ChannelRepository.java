package com.tazedaily.TAZEDaily.Repository;

import java.util.List;
import com.tazedaily.TAZEDaily.Domain.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChannelRepository extends JpaRepository<Channel, Long> {
    List<Channel> findByUserId(Long userId);
}
